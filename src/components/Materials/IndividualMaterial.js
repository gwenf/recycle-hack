import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndividualMaterial extends Component {
  constructor(){
    super();
    this.state = {
      material: ''
    }
  }
  render() {
    console.log(this.props.description.description)
    return (
      <div className='sections'>
        <h1>Learn How to Recycle</h1>
        <p>{this.props.description.description}</p>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
IndividualMaterial = connect(state => (mapStateToProps), null)(IndividualMaterial);
export default IndividualMaterial