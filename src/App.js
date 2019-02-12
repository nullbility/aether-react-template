import React from 'react';
import { Box, Button, Input, Label } from './components';
import { Grommet, Grid } from 'grommet';
import './App.css';

const myTheme = {
  global: {
    colors: { brand: "#7D4CDB", accent: ["#3399cc", "#cc3399"] },
    input: { border: { radius: "4px" } },
    button: { border: { radius: "4px" } },
    checkBox: { border: { radius: "4px" } },
    layer: { border: { radius: "4px" } }
  }
};

const App = () => {
  return (
    <Grommet className="App-body" theme={myTheme} full>
      <Grid
        fill
        rows={["small", "600px", "flex"]}
        columns={["flex", "800px", "flex"]}
        areas={[
          { name: "header", start: [0, 0], end: [2, 0] },
          { name: "body", start: [1, 1], end: [1, 1] },
          { name: "footer", start: [0, 2], end: [2, 2] },
        ]}
        gap="small"
      >

        <Box
          gridArea='header'
          direction='row'
          align='center'
          justify='between'
        >
          <Box
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <Label>
              Logo
            </Label>
          </Box>
        </Box>

        <Box
          gridArea='body'
          direction='column'
        >
          <Input 
            placeholder="username"
          />
          <Input 
            placeholder="password"
            type='password'
          />
          <Button 
            label="submit"
          />
        </Box>

      </Grid>
    </Grommet>
  );
};

export default App;
