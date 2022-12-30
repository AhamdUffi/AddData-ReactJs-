import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 120px;
  height: 30px;
  background-color: #9f2b68;
  color: white;
  padding: 2px 5px;
  border: none;
  outline: none;

  &:hover,
  &:active {
    background-color: #bf40bf;
    cursor: pointer;
  }
`;

export default Button;
