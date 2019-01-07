import React from 'react';
import styled from 'styled-components';
import { map } from 'ramda';

const LabelContainer = styled.span`
  display: inline-block;
`;

const Char = styled.span``;

export const Label = ({
  children
}) => (
  <LabelContainer>
    {
      map((child) => <Char>{ child }</Char>, children)
    }
  </LabelContainer>
);