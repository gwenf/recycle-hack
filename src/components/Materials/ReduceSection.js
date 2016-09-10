import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReduceSection extends Component {
  render() {
    return (
      <div>
        <h1>How Can I Reduce?</h1>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
ReduceSection = connect(state => (mapStateToProps), null)(ReduceSection);
export default ReduceSection