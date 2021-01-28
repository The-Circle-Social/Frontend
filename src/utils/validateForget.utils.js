export default function validateInfo2(values3) {
    let errors = {};
  
   
  
    if (!values3.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values3.email)) {
      errors.email = 'Email address is invalid';
    }
    
  
   
    return errors;
  }