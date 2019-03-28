import React from 'react';
import { Grommet } from 'grommet';
import { Box } from './components';
import Communicator from './pages/Communicator';
import './App.css';

const myTheme = {
  global: {
    colors: { 
      'brand': '#233D4D',
      'neutral-1': "#A1C181",
      'neutral-2': "#579C87",
      'accent-1': "#FE7F2D",
      'accent-2': "#FCCA46",
      'light-1': '#F8F8F8',
    },
    input: { border: { radius: "4px" } },
    button: { border: { radius: "4px" } },
    checkBox: { border: { radius: "4px" } },
    layer: { border: { radius: "4px" } }
  }
};

const App = () => {
  return (
    <Grommet theme={myTheme} full>
      <Box
        fill
      >
        <Communicator />
      </Box>
    </Grommet>
  );
};

export default App;
