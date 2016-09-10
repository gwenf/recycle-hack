import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
    	<div>
	      <h1>Recycle App Logo</h1>
	      <Link to='/'>Home</Link>
	      <Link to='/example'>Point System</Link>
	      {this.props.children}
	    </div>
    );
  }
}
