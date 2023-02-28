import React from "react";
import "./styles.css";
import PostForm from "./components/PostForm";
import AllPost from "./components/AllPost";

export default function App() {
  return (
    <div className="App">
      <h1>React, Redux and Typescript</h1>
      <PostForm />
      <AllPost />
    </div>
  );
}
