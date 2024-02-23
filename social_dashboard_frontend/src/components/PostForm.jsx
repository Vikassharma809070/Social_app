import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

function PostForm({ postId }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);

    useEffect(() => {
        if (postId) {
            
            axios.get(`http://localhost:8000/posts/${postId}/`)
                .then(response => {
                    const post = response.data;
                    setTitle(post.title);
                    setDescription(post.description);
                    setScheduledTime(post.scheduled_time);
                })
                .catch(error => console.error(error));
        }
    }, [postId]);

    const handleCreateOrUpdatePost = async () => {
        try {
            const endpoint = postId ? `http://localhost:8000/posts/${postId}/` : 'http://localhost:8000/posts/create/';
            const method = postId ? 'put' : 'post';
            
            const response = await axios[method](
                endpoint,
                {
                    title,
                    description,
                    scheduled_time: scheduledTime,
                },
               
            );
            
            console.log('Post created/updated:', response.data);
        } catch (error) {
            console.error(error);
        }
    };
// ---------------


const onDrop = (acceptedFiles) => {
    // Handle image upload logic (you can send the file to the server or display a preview)
    setUploadedImage(acceptedFiles[0]);
};

const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

const handleCreatePost = async () => {
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('scheduled_time', scheduledTime);
        formData.append('image', uploadedImage);

        const response = await axios.post(
            'http://localhost:8000/posts/create/',
            formData,
            
        );

        console.log('Post created:', response.data);
    } catch (error) {
        console.error(error);
    }
};
    return (
        <div>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input
                type="datetime-local"
                placeholder="Scheduled Time"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
            />
            {/* Image upload dropzone */}
            
            <div {...getRootProps()} style={{ border: '2px dashed #ddd', padding: '20px', marginTop: '10px' }}>
                <input {...getInputProps()} />
                {uploadedImage ? (
                    <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                ) : (
                    <p>Drag 'n' drop an image here, or click to select one</p>
                )}
            </div>

            <button onClick={handleCreatePost}>Create Post</button>


            <button onClick={handleCreateOrUpdatePost}>{postId ? 'Update' : 'Create'} Post</button>
        </div>
    );
}

export default PostForm;