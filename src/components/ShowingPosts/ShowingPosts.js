import React from "react";
import "./styles.css";
import Users from "./usernameList";
import Display from "./Display";

function ShowingPosts() {
  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ color: "blue" }}> Instagram Users </h1>
      <div className="images">
      
      </div>
      <p> The Posts </p>

      {Users.map((e) => {
console.log(e);
        return <Display name={e.name} caption={e.caption} data = {e.data}/>;
      })}
    </div>
  );
}
export default ShowingPosts;
