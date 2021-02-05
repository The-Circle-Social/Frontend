import { useState, useEffect } from "react";

const useChangePassword = (validate) => {

    const [values, setValues] = useState({
    pass1: "",
    pass2: "",
    passwordError: ""
  });

  const [errors, setErrors] = useState({});

  
  validate = () => {

    if (!values.pass1) {
        setValues({ passwordError: "ENTER PASSWORD" });
        return false;
      } else if (values.pass1.length < 6) {
        setValues({ passwordError: "LENGTH INVALID" });
        return false;
      }
  
  
      if (!values.pass2) {
        setValues({ passwordError: "LENGTH INVALID" });
        return false;
      } else if (values.pass2 !== values.pass1) {
        setValues({ passwordError: "PASSWORDS DO NOT MATCH" });
        return false;
      }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      passwordError: "" 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();

    if (valid === true) {
      setErrors(validate(values));

    }
  };


  return { handleChange, handleSubmit, values: values, errors };
};

export default useChangePassword;
