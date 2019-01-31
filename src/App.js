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
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1,0] },
            { name: "navigation", start: [0, 1], end: [0,1] },
            { name: "main", start: [1, 1], end: [1,1] },
          ]}
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

          <Box
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <Label>
              Social Media
            </Label>
          </Box>
        </Box>

        <Box
          gridArea='navigation'
          direction='row'
          align='left'
        >
          <Box
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <Label>
              Home
            </Label>
          </Box>

          <Box
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <Label>
              About
            </Label>
          </Box>
        </Box>


        </Grid>
      </Grommet>
    );
  }
}

export default App;
