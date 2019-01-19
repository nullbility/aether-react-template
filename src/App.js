import React, { Component } from 'react';
import { Box, Label } from './components';
import { Grommet } from 'grommet';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grommet className="App-body">
          <Box>
            <Label>
              CoA
            </Label>
          </Box>
      </Grommet>
    );
  }
}

export default App;
