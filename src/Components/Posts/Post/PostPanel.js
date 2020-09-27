import React from "react";

const PostPanel = (props) => {
  const { user, post, giveSealFn, deletePostFn } = props;
  const deleteButton = (user === post.author) ? (
    <button onClick={() => deletePostFn(post.id)}>Delete</button>
  ) : (
    <></>
  );
  return (
    <div className="post-panel">
      <button onClick={() => giveSealFn(post.id)}>
        Give Seal of Disapproval
      </button>
      { deleteButton }
    </div>
  );
};

export default PostPanel;
