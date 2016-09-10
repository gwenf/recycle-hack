import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReuseSection extends Component {
  render() {
    return (
      <div>
        <h1>How Can I Reuse?</h1>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
ReuseSection = connect(state => (mapStateToProps), null)(ReuseSection);
export default ReuseSection