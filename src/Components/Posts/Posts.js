import React, { Component } from "react";

import "./Posts.css";

import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import axios from "axios";

import postsUrl from "./postsUrl";

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(postsUrl)
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => console.log(err));
  }

  createPost = (post) => {
    axios
      .post(postsUrl, { author: post.author, text: post.text })
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => console.log(err));
  };

  deletePost = (id) => {
    axios
      .delete(`${postsUrl}/${id}`)
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => console.log(err));
  }

  giveSeal = (id) => {
    axios
      .put(`${postsUrl}/${id}`)
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const allPosts = this.state.posts.map((post, index) => {
      return <Post key={index} post={post} giveSealFn={this.giveSeal} deletePostFn={this.deletePost} user={this.props.user.username} />;
    });
    return (
      <section className="posts-section">
        <NewPost user={this.props.user} createPostFn={this.createPost} />
        <div className="posts-list">{allPosts}</div>
      </section>
    );
  }
}

export default Posts;
