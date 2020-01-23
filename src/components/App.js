import React, { Component } from 'react';
import '../stylesheets/App.css';
import Cart from '../containers/Cart';
import { Container } from '@material-ui/core'

class App extends Component {
  render(){
  	return (
	    <Container>
	      <h1>Welcome to the Redux Shopping Cart</h1>
	      <Cart />
	    </Container>
	  );
  	}
}

export default App;
