import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exampleAction, getMaterialsList } from '../actions/actions'
import Select from 'react-select'

class ExampleComponent1 extends Component {
	constructor(){
		super();
		this.state = {
			chosenMaterial: ''
		}
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}
	chooseMaterial(val){
		var chosenMaterial = val.value;
		this.setState({
			chosenMaterial
		})
	}
	componentWillMount(){
		this.props.dispatch(getMaterialsList())
	}
	render(){
		var optionsArray = [];
		this.props.materials.map(function(val, i){
			optionsArray.push({label: val, value: val})
		})
		return (
			<div>
				<h1 style={{display: 'inline'}}>What do I do with</h1>
				<Select
                      value={this.state.chosenMaterial}
                      className="materials-select"
                      clearable={false}
                      options={optionsArray}
                      searchable={true}
                      onChange={this.chooseMaterial.bind(this)}
                  />
		        <h1 style={{display: 'inline'}}>?</h1>
				<button style={{display: 'block'}} onClick={()=>{this.props.dispatch(exampleAction('dummy data here'))}}>Click here for redux test.</button>
			</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
    return {
    	testData: state.exampleReducer.testData,
    	materials: state.materialsReducer.materials
    };
};
ExampleComponent1 = connect(state => (mapStateToProps), null)(ExampleComponent1);
export default ExampleComponent1
