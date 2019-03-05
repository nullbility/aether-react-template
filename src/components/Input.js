import React from 'react';
import { TextInput as BaseInput, Box } from 'grommet';

export const Input = ({ children, ...props }) => (
  <Box
    background={{
      color: 'light-1'
    }}
    round='xsmall'
  >
    <BaseInput
      { ...props }
    >
        { children }
    </BaseInput>
  </Box>
);
