import axios from "axios";
import { useState } from "react";

const useForgetVerification = (callback, validate) => {
  //const [checker,setChecker]=useState({})
  const [values4, setValues4] = useState({
    OTP: "",
    
  });

  const [errors, setErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false);

  validate = () => {
    if (!values4.OTP) {
      errors.OTP = "OTP required";
      return false;
    } else if (values4.OTP.length < 6 && values4.OTP.length > 6) {
      errors.OTP = "OTP address is invalid";
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues4({
      ...values4,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();

    if (valid === true) {
      setErrors(validate(values4));
      setIsSubmitting(true);

      const user = {
        OTP1: values4.OTP,
      };
      const user1 = JSON.stringify(user);
      console.log(user1);

      axios({
        method: "post",
        url: "http://localhost:8000/checkotp",
        data: user1,
      })
        .then((resp) => {
          const checker = resp.status;
          // setChecker({checker:resp.status})

          if (checker === 202) {
            console.log(resp.data)
            callback(resp.data.name1)
          } else if (checker === 401) {
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return { handleChange, handleSubmit, values: values4, errors };
};
export default useForgetVerification;
