import "./App.css";
import React, { useEffect } from "react";
// TODO: answer here
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";
import axios from "axios";
import { API_URL } from "../src/api/config";
// import { Routes, Route, Link } from "react-router-dom";
// import Profile from "./components/Profile";


function App() {
  // TODO: answer here
  const [posts, setPosts] = React.useState([]);
  //eslint-disable-next-line
  const [datauser, setDataUser] = React.useState({});

  const getPosts = async () => {
    try {
      await axios.get(`${API_URL}/post/list`, { withCredentials: true })
        .then((res) => {
          setPosts(res.data.data)

        }).catch((err) => {
          console.log(err);
        })
    } catch (error) {
      console.log("error");
    }
  }

  const getUser = async () => {
    try {
      await axios.get(`${API_URL}/auth/session`, { withCredentials: true })
        .then((res) => {
          setDataUser(res)
        }).catch((err) => {
          console.log(err);
        })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return (
    <>
      <div className="container" aria-label="App">
        <p hidden aria-label="Profile">{"John Doe"}</p>
        <p hidden aria-label="App-Title"></p>
        <Navbar />
        <UploadForm
          post={posts}
          setPosts={setPosts}
        />
        {/* <Routes>
          <Route path="/" element={<Profile/>} /> */}

        {posts.map((post) => (
          <PostCard
            key={post.id}
            image={post.image}
            caption={post.content}
            username={post.author.name}
            id={post.id}
            dislikeCount={post.dislikeCount}
            likeCount={post.likeCount}
            disliked={post.disliked}
            liked={post.liked}
            date={(post.createdAt).substring(0, 10)}
          />
        ))
        }
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;