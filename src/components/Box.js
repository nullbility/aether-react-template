import React from 'react';
import styled from 'styled-components';
import { Box as BaseBox } from 'grommet';

const BoxContainer = styled.span`
  background-color: rgba(143, 29, 44, 0.3);
`;

export const Box = ({
  children
}) => (
  <BoxContainer>
    <BaseBox
      tag='header'
      direction='row'
      align='left'
      justify='between'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
    >
      {
        children
      }
    </BaseBox>
  </BoxContainer>
);