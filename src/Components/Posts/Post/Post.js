import React from "react";

import PostPanel from "./PostPanel"

const Post = (props) => {
  const { user, post, giveSealFn, deletePostFn } = props;
  return (
    <div className="post">
      <div className="post-header">
        <h3>{post.author} thinks...</h3>
        <h3 className="seals">{post.likes} Seals</h3>
      </div>
      <div className="post-body">
        <p>{post.text}</p>
        <PostPanel user={user} post={post} giveSealFn={giveSealFn} deletePostFn={deletePostFn} />
      </div>
    </div>
  );
};

export default Post;
