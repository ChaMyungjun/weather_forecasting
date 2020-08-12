import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(15, 76, 129, 0.4) 10%,
    rgba(20, 86, 140, 0.9) 70%,
    rgba(25, 96, 160, 1)
  );
  background-size: cover;
  font-family: sans-serif;
  color: white;
`;

const MainTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainTemplate;
