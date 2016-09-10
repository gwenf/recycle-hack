import React, { Component } from 'react'
import { connect } from 'react-redux'

class LearnSection extends Component {
  render() {
  	var that = this;
  	var types = [];
  	var materialsArr = '';
  	if (this.props.material.length > 0){
  		var material = this.props.materials.filter(function(val){
  			if (val.name === that.props.material){
  				types = [...val.types]
  			}
	  		return val.name === that.props.material
	  	})
	  	var materialsArr = types.map(function(val, i){
	  		return <li key={i}>{val}</li>
	  	})
  	}
    return (
      <div>
        <h1>LearnSection:</h1>
        <ul>{materialsArr}</ul>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
LearnSection = connect(state => (mapStateToProps), null)(LearnSection);
export default LearnSection