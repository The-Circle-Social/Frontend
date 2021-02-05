import styled from "styled-components";
import {Link} from "react-router-dom";

const white = "#fff";
const blue = "#3cbfb6";
const grey = "#888b95";
const red = "#eb1b49";
const black = "#000";

export const FormContainer = styled.div`
    color: white;
    margin: auto;
    max-width: 350px;
    box-sizing: border-box;
    font-family: "Poppins";
    `;

export const Form = styled.form``;

export const FormHeader = styled.h1`
    color: #4bc6bd;
    padding: 5px 0;
    font-weight: lighter;
    `;

export const FormCaption = styled.p`
    font-size: 1.2em;
    padding: 5px 0;
    `;

export const FormInputContainer = styled.div``;

export const FormInputField = styled.input`
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    color: #4bc6bd;
    border: 1px solid #4bc6bd;
    border-radius: 4px;
    background-color: inherit;
    &::placeholder {
        color: ${blue};
        font-family: "Poppins";
      }
    `;

export const SubmitFormButton = styled.button`
    color: white;
    font-weight: bold;
    letter-spacing: 1.5px;
    width: 100%;
    margin: 5px 0;
    padding: 10px;
    font-size: 1.5em;
    background-image: linear-gradient(to right, ${red} , ${grey} , ${blue} );
    border: 0;
    `;

export const Back = styled.span`
    float: right;
    font-size: 1.5em;
    `;

export const BackLink = styled(Link)`
    color: inherit;
    text-decoration: none;
  `;

export default styled;
