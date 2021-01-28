import axios from "axios";
import { useState, useEffect } from "react";
import useGeolocation from 'react-hook-geolocation'

const useSignUp = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const [user , setUser] = useState({
    username:"",
    id:"",
  })

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState({});

  validate = () => {
    if (!values.username.trim()) {
      setValues({ nameError: "ENTER USERNAME" });
      return false;
    }
    if (!values.email) {
      setValues({ emailError: "ENTER EMAIL" });
      return false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      setValues({ emailError: "INVALID EMAIL" });
      return false;
    }
    if (!values.password) {
      setValues({ passwordError: "ENTER PASSWORD" });
      return false;
    } else if (values.password.length < 6) {
      setValues({ passwordError: "LENGTH INVALID" });
      return false;
    }


    if (!values.password2) {
      setValues({ passwordError: "LENGTH INVALID" });
      return false;
    } else if (values.password2 !== values.password) {
      setValues({ passwordError: "PASSWORD DO NOT MATCH" });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const geolocation = useGeolocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();
  
    if (valid === true) {
      setErrors(validate(values));
      setIsSubmitting(true);

      const user = {
        name1: values.username,
        password1: values.password,
        email1: values.email,
        latitude1:geolocation.latitude,
        longitude1:geolocation.longitude
      };
      const user1  = JSON.stringify(user)
      
      axios({
        method: "post",
        url: "http://localhost:8000/kandarp",
        data: user1,
      })
        .then(({data}) => {
          const {id} = data
          console.log(data)
          setUser({
            id,
            username:values.username
          });
        })
        .catch((err) => console.log(err));
        axios({
          method: "post",
          url: "http://localhost:3001/kandarp",
          data: user1,
        })
          .then(({data}) => {
            const {id} = data
            console.log(data);
            setUser({
              id,
              username:values.username
            });
          })
          .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
   
    if (user.username && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors,user]);

  return { handleChange, handleSubmit, values, errors,user};
};
export default useSignUp;
