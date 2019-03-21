import React from 'react';
import styled, { css } from "styled-components";
import { Button as BaseButton } from 'grommet';

export const Button = styled(({ color, children, ...otherProps }) => (
  <BaseButton {...otherProps} classes={{ disabled: "disabled" }}>
    {children}
  </BaseButton>
))`
  color: white;
  cursor: pointer;
  background-color: #e50914;
  line-height: normal;
  margin: 18px 3% 0 0;
  padding: 7px 17px;
  font-weight: 100;
  border: transparent;
  border-radius: 3px;
  font-size: 16px;
  text-decoration: one;
  ${props =>
    props.right &&
    css`
      float: right;
    `}
  &:hover {
    background-color: #e53935;
  }
`;