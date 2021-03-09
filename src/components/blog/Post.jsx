import React,{useState} from "react";

const Post = ({ title, content,image, editPost, id, deletePost }) => {
  const [like,setLike]=useState(false)
  const likedislike =()=>{

    like?setLike(true):setLike(false)

  }
  return (
    <>
      <section className="post-container">
        <h2>{title}</h2>
        <img src={image} alt="img" /> 
        <p className="post-content"> {content}</p>
        <button className="button" onClick={() => editPost(id)}>Edit</button>
        <button className="button" onClick={() => deletePost(id)}>Delete</button>
        <button onClick={likedislike}>like</button>
        <textarea
            placeholder="Comment"
            rows="8"
            cols="41"
            ></textarea>
      </section>
    </>
  );
};
export default Post;
