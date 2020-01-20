import React from 'react';
import '../stylesheets/App.css';
import Shelf from './Shelf';
import { Container } from '@material-ui/core'

function App() {
  return (
    <Container fluid>
      <h1>Welcome to the Redux Shopping Cart</h1>
      <Shelf />
        
    </Container>
  );
}

export default App;
