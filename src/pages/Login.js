import React from 'react';
import { 
  Box, 
  Button, 
  Input, 
  Grid,
  Label 
} from '../components';

const Login = () => {

  return (
    <Grid
      fill
      rows={["small", "medium", "flex"]}
      columns={["flex", "medium", "flex"]}
      areas={[
        { name: "header", start: [0, 0], end: [2, 0] },
        { name: "body", start: [1, 1], end: [1, 1] },
        { name: "footer", start: [0, 2], end: [2, 2] },
      ]}
    >

      <Box
        background={{
          color: 'neutral-1'
        }}
        direction='column'
        gridArea='body'
        pad='small'
        round='small'
      >

        <Grid
          rows={['small', 'small']}
          columns={['flex', 'flex']}
          areas={[
            { name: 'fields', start: [0,0], end: [1,0] },
            { name: 'buttons', start: [0,1], end: [1,1] },
          ]}
        >

          <Box
            gridArea='fields'
            gap='small'
          >
            <Input 
              placeholder='username'
            />
            <Input
              placeholder='password'
              type='password'
            />
          </Box>

          <Box
            gridArea='buttons'
          >
            <Button 
              label='submit'
            />
          </Box>

        </Grid>
      </Box>
    </Grid>
  );
};

export default Login;