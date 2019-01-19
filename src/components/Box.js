import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.span`
  background-color: rgba(143, 29, 44, 0.3);
  width: 100%;
  height: 100%;
`;

export const Box = ({
  children
}) => (
  <BoxContainer>
    {
      children
    }
  </BoxContainer>
);