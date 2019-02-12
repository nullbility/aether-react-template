import React from 'react';
import { Button as BaseButton } from 'grommet';

export const Button = ({
  children,
  ...props
}) => (
  <BaseButton
    color="accent-1"
    primary
    { ...props }
  >
    {
      children
    }
  </BaseButton>
);