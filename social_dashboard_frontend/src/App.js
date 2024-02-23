// // import logo from './logo.svg';
import './App.css';
// import ProtectedRoute from './ProtectedRoute';

// function App() {
//   const isAuthenticated = true;
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Helloword</h1>
//       </header>

//       <Route path="/login" component={Login} />
//             <ProtectedRoute
//                 path="/dashboard"
//                 component={Dashboard}
//                 isAuthenticated={isAuthenticated}
//             />
//     </div>
//   );
// }

// export default App;

// ------

import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
// import Analytics from "../src/components/Analytics";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
// import PostDetail from '../src/components/PostDetail';

function App() {
  return (
    <>
      <BrowserRouter>
       <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/posts/*" element={<PostList />} />
          <Route path="/post/create/*" element={() => <PostForm />} />
          {/* <Route path="/analytics/*" element={<analytics />} /> */}
        </Routes>
      </BrowserRouter>
      {/* ----- */}
     
    </>
  );
}

export default App;
