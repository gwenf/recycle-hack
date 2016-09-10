import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exampleAction } from '../actions/actions'

class ExampleComponent1 extends Component {
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}
	onSelectChange(){
		console.log('changed')
	}
	render(){
		return (
			<div>
				<h1 style={{display: 'inline'}}>What do I do with</h1>
				<select id='select-material-dropdown' onChange={this.onSelectChange.bind(this)}>
		             <option value="1">Paper</option>
		             <option value="2">Plastic</option>
		             <option value="2">Aluminum</option>
		        </select>
				<button style={{display: 'block'}} onClick={()=>{this.props.dispatch(exampleAction('dummy data here'))}}>Click here for redux test.</button>
			</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
    return {
    	testData: state.exampleReducer.testData
    };
};
ExampleComponent1 = connect(state => (mapStateToProps), null)(ExampleComponent1);
export default ExampleComponent1
