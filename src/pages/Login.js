import React from 'react';
import { Box, Button, Grid, Header, Input } from '../components';

const Login = () => {
  return (
    <Grid
      fill
      rows={['flex', 'flex', 'flex']}
      columns={['flex', 'medium', 'flex']}
      areas={[
        { name: 'header', start: [0, 0], end: [2, 0] },
        { name: 'body', start: [1, 1], end: [1, 1] },
        { name: 'footer', start: [0, 2], end: [2, 2] }
      ]}
    >
      <Box
        gridArea="header"
      >
        <Header/> 
      </Box>

      <Box
        background={{
          color: 'accent-2'
        }}
        direction="column"
        gridArea="body"
        height="fit-content"
        pad="small"
        round="small"
      >
        <Grid
          rows={['auto', 'xsmall', 'auto']}
          columns={['flex', 'flex']}
          areas={[
            { name: 'fields', start: [0, 0], end: [1, 0] },
            { name: 'buttons', start: [0, 2], end: [1, 2] }
          ]}
        >
          <Box gridArea="fields" gap="small">
            <Input placeholder="username" />
            <Input placeholder="password" type="password" />
          </Box>

          <Box gridArea="buttons">
            <Button
              primary
              background='accent-2'
              label="submit" 
            />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Login;
