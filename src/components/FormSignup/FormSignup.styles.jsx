import styled from "styled-components";
import { Link } from "react-router-dom";
const blue = "#4ecdc4";
const white = "#fff";
// const red = "#e3244f";
const black = "#000";

export const SignFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 2rem;
  font-family: Poppins, sans-serif;
`;
export const SignUpHeading = styled.h1`
  font-size: 2.5rem;
  color: ${white};
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormHeading = styled.h3`
  color: white;
  text-align: left;
  margin-left: -14rem;
  margin-bottom: 1rem;
  font-weight: 100;
  font-size: 2rem;
`;
export const InputContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;
export const FormLabel = styled.label`
  display: flex;
  justify-content: center;
`;
export const FormInput = styled.input`
  height: 4rem;
  max-width: 30rem;
  width: 100%;
  background-color: ${black};
  border: 0.5px solid rgba(78, 205, 196, 0.5);
  color: ${blue};
  padding: 1rem;
  &::placeholder {
    color: ${blue};
  }
`;
export const InputErr = styled.p`
  color: ${white};
  font-size: 1rem;
`;
export const ShowPasswordContainer = styled.div`
  color: ${white};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const ShowPasswordLabel = styled.label`
  width: 65%;
  margin-left: 1rem;
  font-size: 1.3rem;
`;
export const SubmitBtn = styled.button`
  height: 4rem;
  display: block;
  max-width: 30rem;
  width: 100%;
  font-size: 1.6rem;
  padding: 1rem;
  background: linear-gradient(
    90deg,
    rgba(227, 36, 79, 1) 15%,
    rgba(78, 205, 196, 1) 78%
  );
  border: none;
  color: ${white};
  font-weight: bold;
`;
export const TAndCContainer = styled.div`
  color: $white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const TAndCLabel = styled.label`
  width: 65%;
  margin-left: 1rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${white};
`;
export const TAndCLink = styled(Link)`
  color: ${blue};
  text-decoration: none;
`;
export const LoginLinkContainer = styled.div`
  color: rgba(256, 256, 256, 0.7);
  font-size: 1.5rem;
`;
export const LoginLink = styled(Link)`
  color: ${white};
  text-decoration: none;
`;
export default styled;
