const Verification = (type, value, func, secondaryValue) => {
  let errors = {};
  switch (type) {
    case "username":
      //* Conditions for username
      //- Lenght must be 5 or greater
      //- Should only contain a-z,A-Z,0-9,-_

      //- Setting Errors are true if they are not then it will be false in later if conditions
      errors = {
        length: true,
        syntax: true,
      };

      //- Checks if Lenght of username is 5 or greater, if it is then setting length in error false
      if (/.{5,}/.test(value)) errors.length = false;

      //- Checks if username is in valid format , if it is then setting syntax in errors false
      if (!/[ `!@#$%^&*()+\-=[\]{};':"\\|,.<>/?~]/.test(value))
        errors.syntax = false;

      break;
    case "email":
      //* Conditions
      //- Should be a valid email address

      //-  Setting errors are true if they are not then it will be change in the future
      errors = {
        syntax: true,
      };
      //- Checks if email is valid , if it is then setting syntax in errors false
      if (/\w{1,}@\w{1,}\.(\w{1,})+/.test(value)) errors.syntax = false;

      break;
    case "password":
      //* All Password conditions
      //- Must contain a lowercase letter
      //- Must contain a uppercase letter
      //- Must contain a symbol
      //- lenght should be 8 or greater

      //-   Setting errors are true if they are not then it will be change in the future
      errors = {
        lowercase: true,
        uppercase: true,
        length: true,
        symbol: true,
      };

      //- Checks if password contains a lowercase character, if it contains then setting lowercase in errors false
      if (/[a-z]/.test(value)) errors.lowercase = false;

      //- Checks if password contains a uppercase character, if it contains then setting uppercase in errors false
      if (/[A-Z]/.test(value)) errors.uppercase = false;

      //- Checks if password contains a symbol or a number, if it contains then setting symbol in errors false
      if (/[@#$%^&*!_\+\-|\\/0-9]/.test(value)) errors.symbol = false;

      //- Checks if length of password is 8 or greater, if it is then setting length in errors false
      if (/.{8,}/.test(value)) errors.length = false;

      break;
    case "confirmPassword":
      //* Conditions of confirm password
      //- Should be equal to password(secondaryValue)

      //- Setting errors are true if they are not then it will be change in the future
      errors = {
        equal: true,
      };

      //- Checks if password is equal to confirm password, if it is then setting equal in errors false
      if (value === secondaryValue) errors.equal = false;

      break;
    default:
      break;
  }
  func(errors);
  return errors;
};
export default Verification;
