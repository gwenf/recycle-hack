import React, { Component } from 'react'
import { connect } from 'react-redux'

class LearnSection extends Component {
  constructor(){
    super();
    this.state = {
      material: ''
    }
  }
  componentWillMount(){
    var material = localStorage.getItem('chosenMaterial');
    this.setState({
      material
    })
  }
  render() {
  	var that = this;
  	var types = [];
  	var materialsArr = '';
  	// if (this.props.material.length > 0){
  		var material = this.props.materials.filter(function(val){
  			if (val.name === that.state.material){
  				val.types.map(function(x){
  					types.push(x.type)
  				})
  			}
	  		return val.name === that.props.material
	  	})
	  	console.log(types)
	  	var materialsArr = types.map(function(val, i){
	  		return <button key={i}>{val}</button>
	  	})
  	// }
    return (
      <div className='sections'>
        <h1>Learn How to Recycle {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())}</h1>
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