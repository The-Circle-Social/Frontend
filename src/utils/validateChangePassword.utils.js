export default function validateInfo2(values2) {
    let errors = {};
  
   
  
    if (!values2.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values2.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values2.password) {
      errors.password = 'Password is required';
    } else if (values2.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
   
    return errors;
  }