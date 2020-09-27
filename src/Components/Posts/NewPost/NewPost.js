import React, { Component } from "react";

import "./NewPost.css";

class NewPost extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  handleText = (text) => {
    this.setState({ text });
  };

  handleSubmit = () => {
    const { user, createPostFn } = this.props;
    const { text } = this.state;
    let author;

    if (user.username) {
      author = user.username;
    } else author = "Anon";

    const post = {
      author,
      text,
      likes: 0,
    };

    createPostFn(post);
    this.setState({ text: "" });
  };

  render() {
    return (
      <section className="newpost">
        <textarea
          value={this.state.text}
          onChange={(e) => this.handleText(e.target.value)}
          rows="3"
          cols="50"
          maxLength="150"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </section>
    );
  }
}

export default NewPost;
