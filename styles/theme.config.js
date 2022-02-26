import { createGlobalStyle } from "styled-components";
//lightTheme is variable
//using ,
export const lightTheme = {
  primaryColor: "#fefaf6", //main color
  secondaryColor: "#232320", //for text
  accentColor: "#ffc4ff", //fpr decoratioin
  textColor: "#656270",
};

//all the elements can got theme arguments, so we can use this to set color
//GlobalStyles is kind of component using ;
export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    padding:0;
    margin:0;
    box-sizing:inherit;
}
html{
    box-sizing:border-box;
    font-size:62.5%;



}
body{
    font-family:'Roboto',sans-serif;
    font-weight:400;
    line-height:1.6;
    font-size:1.6rem;
    color:${({ theme }) => theme.secondaryColor};
    background-color:${({ theme }) => theme.primaryColor}
}
p{
    font-size: 2rem;
    font-weight: 500;
    color:${({ theme }) => theme.textColor}
}
a {
    color: inherit;
    text-decoration: none;
  }
input,textarea,button {

    font-family:inherit;
}

`;
