import { createGlobalStyle } from 'styled-components';
import React, { FC } from 'react';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
        background-color: white;
        margin: 0;  
        color: #173b45;
    }
`;

const GlobalStyle: FC = () => {
  return <StyledGlobalStyle></StyledGlobalStyle>;
};

export default GlobalStyle;
