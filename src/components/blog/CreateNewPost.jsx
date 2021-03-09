import React,{useState}  from "react";
import Cropper from "./cropper"

const CreateNewPost = props => {
 
  const handleSubmit =(dataURI) =>
  {
    props.setImage(dataURI) 
    console.log(dataURI)
    onsubmit=props.savePostImg
    console.log(123)
  }

 
  return (
    <>
    <section >
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Caption"
          size="39"
          required 
          ref={props.getTitle}
        ></input>
       
        
          <Cropper setImage={props.setImage} handleSubmit={handleSubmit}/>
         
      
        <br />
        <br />
        <section>
        </section>
      </form>
      </section>
    </>
  );
};
export default CreateNewPost;
