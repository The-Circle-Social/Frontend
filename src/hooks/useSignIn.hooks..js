import axios from "axios";
import { useState, useEffect } from "react";

const useSignIn = (callback, validate) => {
  // eslint-disable-next-line no-unused-vars
  const [checker, setChecker] = useState({});
  const [values2, setValues2] = useState({
    email: "",
    username: "",
  });
  const [a, setA] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  validate = () => {
    // let nameError = errors.username;
    // let emailError = errors.email;
    // let passwordError = errors.password;

    if (!values2.email) {
      errors.email = "Email required";
      return false;
    } else if (!/\S+@\S+\.\S+/.test(values2.email)) {
      errors.email = "Email address is invalid";
      return false;
    } else if (values2.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues2({
      ...values2,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();

    if (valid === true) {
      setErrors(validate(values2));
      setIsSubmitting(true);
      setA(true);

      const user = {
        email1: values2.email,
        password1: values2.password,
      };
      const user1 = JSON.stringify(user);
      console.log(user1);
      axios({
        method: "post",
        url: "http://localhost:8000/check",
        data: user1,
      })
        .then((resp) => {
          console.log(resp.status);
          setChecker({checker:resp.status})

          if (checker === 201) {
            setA(true);
            setValues2(resp.data)
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { handleChange, handleSubmit, values: values2, errors, a };
};
export default useSignIn;
