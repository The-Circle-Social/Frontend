import styled from "styled-components";
import {Link} from "react-router-dom";

const white = "#fff";
const blue = "#3cbfb6";
const grey = "#888b95";
const red = "#eb1b49";
const black = "#000";


export const SignInFormContainer = styled.div`
    color: ${white};
    margin: auto;
    width: 300px;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  `;

export const Form = styled.div`
    
  `;

export const SignInFormHeading = styled.div`
    text-align: center;
    font-size: 1.6em;
    margin-bottom: 100px;
    `;

export const FormInputDiv = styled.div``;

export const FormEmailInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    color: ${blue};
    border: 1px solid ${blue};
    border-radius: 4px;
    background-color: ${black};
    &::placeholder {
        color: ${blue};
        font-family: "Poppins";
      }
    `;

export const FormPassInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 15px 0 0 0;
    color: ${blue};
    border: 1px solid ${blue};
    border-radius: 4px;
    background-color: ${black};
    &::placeholder {
        color: ${blue};
        font-family: "Poppins";
      }
    `;

export const ShowCheckboxDiv = styled.div`
    float: left;
    `;

export const ShowCheckbox = styled.input`
    position: relative;
    top: 2px;
    `;

export const ForgotPass = styled.span`
    float: right;
    `;

export const ForgotLink = styled(Link)`
    color: inherit;
    text-decoration: none;
  `;

export const SubmitFormButton = styled.button`
    color: white;
    font-weight: bold;
    letter-spacing: 1.5px;
    width: 100%;
    margin: 40px 0;
    padding: 10px;
    font-size: 1.5em;
    background-image: linear-gradient(to right, ${red} , ${grey} , ${blue} );
    border: 0;
    `;

export const SignUpContainer = styled.div`
    width: 100%;
    text-align: center;
    `;

export const SignUpText = styled.span`
    opacity: 0.5;
    `; 

export const SignUpLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: larger;
    `;

export default styled;
