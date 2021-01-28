import { useState } from "react";
import axios from "axios";
import Cropper from "./ImageCrop.component";
const FormSecondary = ({ user, history }) => {
  const [imgsrc, setImgSrc] = useState("");
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [hobbies, setHobbies] = useState([0, 0, 0, 0, 0]);
  const [dob, setDob] = useState("");
  // const []
  const handleSubmit = (e) => {
    //console.log (image)
    const data = JSON.stringify({
      url: image,
      name1: user.username,
    });
    let url = "http://localhost:8000/image";
    axios
      .post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setImgSrc("");
        setTimeout(() => {
          setImgSrc(`http://localhost:8000${res.data.url}`);
        }, 200);
      })
      .catch((err) => console.log(err));
  };

  const onBtnClick = () => {
    console.log(user, "dfgh");

    if (!image || !description || !hobbies) {
      return;
    }
    const data = JSON.stringify({
      description,
      hobbies,
      dob,
      name1: user.username,
    });
    axios({
      method: "post",
      url: "http://localhost:8000/getting",
      data,
    }).then((resp) => {
      console.log(resp);
    });
    history.push("/");
  };
  const handleHobbyChange = (index) => {
    let hobbyArr = hobbies;
    if (hobbyArr[index] === 0) {
      hobbyArr[index] = 1;
    } else {
      hobbyArr[index] = 0;
    }
    setHobbies(hobbyArr);
  };
  return (
    <div>
      <Cropper setImage={setImage} handleSubmit={handleSubmit} />
      <img src={imgsrc} height="100px" width="100px" alt = "Preview"/>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <input
        type="date"
        name="DOB"
        placeholder="description"
        value={dob}
        onChange={({ target }) => setDob(target.value)}
      />
      <p onClick={() => handleHobbyChange(0)}>hobby1</p>
      <p onClick={() => handleHobbyChange(1)}>hobby2</p>
      <p onClick={() => handleHobbyChange(2)}>hobby3</p>
      <p onClick={() => handleHobbyChange(3)}>hobby4</p>
      <p onClick={() => handleHobbyChange(4)}>hobby5</p>
      <button onClick={onBtnClick}>Submit2</button>
    </div>
  );
};
export default FormSecondary;
