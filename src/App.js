import React from 'react';
import { Grommet } from 'grommet';
import Login from './pages/Login'
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
      <Login/>
    </Grommet>
  );
};

export default App;
