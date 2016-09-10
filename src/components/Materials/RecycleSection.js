import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecycleSection extends Component {
  render() {
    return (
      <div>
        <h1>How Can I Recycle?</h1>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials,
      currentMaterial: state.materialsReducer.currentMaterial
    };
};
RecycleSection = connect(state => (mapStateToProps), null)(RecycleSection);
export default RecycleSection