import React from 'react';
import { Grid as BaseGrid } from 'grommet';

export const Grid = ({ children, ...props }) => (
  <BaseGrid
    { ...props }
  >
    { children }
  </BaseGrid>
);