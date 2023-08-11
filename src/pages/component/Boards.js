import React, { useState, useEffect } from "react";
import api from "./api";
import "./Boards.css";

function formatTime(dateString) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString("en-US", options);
}

function Boards() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    api
      .get("boards/brd/")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      title: title,
      body: body,
      created_at: new Date().toISOString(),
      modified_at: new Date().toISOString(),
    };

    api
      .post("boards/brd/", newPost)
      .then((response) => {
        console.log("New post created:", response.data);
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });

    // 폼 초기화
    setTitle("");
    setBody("");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app-container">
      <h1 className="top">게시판</h1>

      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="form-group">
            <label htmlFor="title"></label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="body"></label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="본문"
              required
            />
          </div>
          <div className="form-actions">
            <div className="button-container">
              <button type="submit">게시글 작성</button>
            </div>
          </div>
        </div>
      </form>

      <ul className="post-list">
        {posts.map((post) => (
          <li className="post-item" key={post.id}>
            <div className="post-title-time">
              <h5 className="post-title">{post.title}</h5>
              <p className="post-time">
                작성 시간: {formatTime(post.created_at)}
              </p>
            </div>
            <div className="post-content">
              <p className="post-body">{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Boards;
