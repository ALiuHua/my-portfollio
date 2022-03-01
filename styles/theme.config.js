import { createGlobalStyle } from "styled-components";
//lightTheme is variable
//using ,
export const lightTheme = {
  primary: "#fefaf6",
  secondary: "#232320",
  line: "#ffc4ff",
  grey: "#656270",
  title: "#232320",
  dropdownText: "#fff",
  dropdownLine: "#ffc4ff",
  btnHover: "#3c3c3c",
  aboutLine: "#fdf5ee",
  arrow: "#fe66fe",
  aboutResume: "transparent",
  projectText: "#fefaf6",
};
export const darkTheme = {
  primary: "#0a192f",
  secondary: "#64ffda",
  line: "#ccd6df",
  grey: "#8892b0",
  title: "#ccd6df",
  dropdownText: "#0a192f",
  dropdownLine: "#8892b0",
  btnHover: "#00f6bb",
  aboutLine: "#071325",
  arrow: "#64ffda",
  aboutResume: "#64ffda",
  projectText: "#64ffda",
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
    font-size:2rem;
    color:${({ theme }) => theme.secondary};
    background-color:${({ theme }) => theme.primary}
}
p{
    color:${({ theme }) => theme.secondary}
}
a {
    color: inherit;
    text-decoration: none;
  }
  
li{

    list-style:none;
    color:${({ theme }) => theme.secondary};
  }
input,textarea,button {

    font-family:inherit;
}

`;
