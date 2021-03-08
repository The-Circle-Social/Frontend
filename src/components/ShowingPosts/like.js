import React, { useState } from "react";

function Counter() {
  const [noLike, setnoLike] = useState(0);
  const [count, setCount] = useState(0);
  const [like, setlike] = useState(false);

  const handlelike = () => {
    setlike(!like);
    if (like) {
      setnoLike((noLike) => noLike - 1);
      setCount((prevCount) => 0);
    
    } else if (!like) {
      setnoLike((noLike) => noLike + 1);
      setCount((prevCount) => 1);
    }
  };
  return (
    <div>
      <div>
        <button onClick={handlelike}>like</button>
        <h4>no of like is {noLike}</h4>
      </div>
    </div>
  );
}

export default Counter;