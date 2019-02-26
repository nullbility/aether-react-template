import React from 'react';
import styled from 'styled-components';
import { addIndex, map } from 'ramda';
const mapIndexed = addIndex(map);

const LabelContainer = styled.span`
  display: inline-block;
`;

const Char = styled.span``;

export const Label = ({
  children
}) => (
  <LabelContainer>
    {
      mapIndexed(
        (child, i) => <Char key={i}>{ child }</Char>,
        children
      )
    }
  </LabelContainer>
);