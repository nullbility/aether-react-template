import React from 'react';
import { Box as BaseBox } from 'grommet';


export const Box = ({
  children,
  ...props
}) => (
  <BaseBox
    background={{
      color: 'brand',
      opacity: 'weak'
    }}
    {...props}
  >
    {
      children
    }
  </BaseBox>
);