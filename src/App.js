import React from 'react';
import { Grommet } from 'grommet';
import { Box } from './components';
import Login from './pages/Login';
import './App.css';

const myTheme = {
  global: {
    colors: { 
      'brand': '#101C28',
      'neutral-1': "#E8F1F8", 
      'neutral-2': "#ADC4D6", 
      'accent-1': "#F80652",
      'accent-2': "#222F3F",
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
        <Login />
      </Box>
    </Grommet>
  );
};

export default App;
