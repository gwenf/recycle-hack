import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
    	<div>
    		<div className='main-top-nav'>
		      <h1>Recycle App Logo</h1>
		      <div>
			      <Link to='/'>Home</Link>
			      <Link to='/example'>Learn more about earning points</Link>
		      </div>
	        </div>
	      {this.props.children}
	    </div>
    );
  }
}
