import React, { Component } from 'react';
import { Box, Label } from './components';
import { Grommet, Grid } from 'grommet';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grommet className="App-body" full>
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
            direction='row'
          >
            <Label>
              Home
            </Label>
          </Box>

        </Grid>
      </Grommet>
    );
  }
}

export default App;
