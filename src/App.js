import React, { Component } from 'react';
import { Label } from './components/Label';
import { Box } from './components/Box';
import { Column, Row } from 'simple-flexbox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Column flexGrow={1}>
          <Row horizontal='center' className="App-body">
            <Box>
              <Label>
                CoA
              </Label>
            </Box>
          </Row>
        </Column>
      </div>
    );
  }
}

export default App;
