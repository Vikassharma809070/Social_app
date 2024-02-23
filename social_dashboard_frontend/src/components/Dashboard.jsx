import { Link } from 'react-router-dom';

function Dashboard() {
    const navStyle = {
        backgroundColor: '#333',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
    };
    
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px',
        borderRadius: '8px',
        transition: 'background-color 0.3s',
    };
    
    // const activeLinkStyle = {
    //     backgroundColor: '#555',
    // };
    
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Dashboard</h1>
            <nav style={navStyle}>
                {/* <ul style={{ listStyle: 'none', padding: '0', display: 'flex', justifyContent: 'space-around' }}>
                    <li><Link to="/analytics" style={{ color: '#fff', textDecoration: 'none' }}>Analytics</Link></li>
                    <li><Link to="/posts" style={{ color: '#fff', textDecoration: 'none' }}>Posts</Link></li>
                    <li><Link to="/post/create" style={{ color: '#fff', textDecoration: 'none' }}>Create Post</Link></li>
                </ul> */}

                {/* --------------- */}

                <ul style={{ listStyle: 'none', padding: '0', display: 'flex', justifyContent: 'space-around' }}>
                    <li><Link to="/analytics" style={{ ...linkStyle }}>Analytics</Link></li>
                    <li><Link to="/posts" style={{ ...linkStyle }}>Posts</Link></li>
                    <li><Link to="/post/create" style={{ ...linkStyle }}>Create Post</Link></li>
                </ul>
            </nav>
           
           {/* Add Components here */}
        </div>
    );
}

export default Dashboard;
