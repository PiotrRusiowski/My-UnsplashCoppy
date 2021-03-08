import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-size:15px;
}

button {
  cursor: pointer;  
  outline:0px;
}

ul{
    list-style: none
}
p{
  
}
a{
    text-decoration:none;

}
`;

export default GlobalStyle;
