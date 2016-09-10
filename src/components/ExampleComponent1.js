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
	chooseMaterial(){
		console.log('changed')
	}
	componentWillMount(){
		console.log('componentWillMount')
		this.props.dispatch(getMaterialsList())
	}
	render(){
		return (
			<div>
				<h1 style={{display: 'inline'}}>What do I do with</h1>
				<Select
                      value={this.state.chosenMaterial}
                      className="select"
                      clearable={false}
                      options={[{label: 'Q1', value: 'Q1'},{label: 'Q2', value: 'Q2'},{label: 'Q3', value: 'Q3'}]}
                      searchable={false}
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
