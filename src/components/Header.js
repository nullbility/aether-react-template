
import React from 'react';
import { Grid as BaseGrid } from 'grommet';


export const Header = ({
  children,
  ...props
}) => (
  <BaseGrid
    fill
    rows={['auto', 'flex']}
    columns={['auto', 'flex']}
    {...props}
  >
    {
      children
    }
  </BaseGrid>
);