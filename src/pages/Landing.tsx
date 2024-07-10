import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  color: white;
`;

const Landing = () => {
  return (
    <Wrapper>
      <h1> Landing Page </h1>
      <StyledButton>styled btn</StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
  h1 {
    color: white;
  }
  .content {
    background: blue;
    color: yellow;
  }
`;

export default Landing;
