import React from 'react';
import styled from "styled-components";
import { Button as BaseButton } from 'grommet';

export const Button = styled(({ color, children, ...otherProps }) => (
  <BaseButton {...otherProps} classes={{ disabled: "disabled" }}>
    {children}
  </BaseButton>
))`
  color: ${ props => !!props.color ? props.color : 'accent-1' };
  & .label {
    background-color: purple;
  }
  &.disabled {
    color: black;
    background-color: gray;
    .label {
      background-color: green;
    }
  }
`;