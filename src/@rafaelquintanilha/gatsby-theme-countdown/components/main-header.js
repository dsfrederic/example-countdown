import { Styled } from "theme-ui";
import React from 'react';



const MainHeader = ({text}) => (
  <div>
    <Styled.h1>
      {text}
    </Styled.h1>
    <Styled.h2>
      16 . 07 . 22
    </Styled.h2>
  </div>
);

export default MainHeader;
