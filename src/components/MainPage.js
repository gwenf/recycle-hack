import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exampleAction, getMaterialsList } from '../actions/actions'
import Select from 'react-select'

import LearnSection from './Materials/LearnSection'

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
			optionsArray.push({label: val.name, value: val.name})
		})

		var learnSection = this.state.chosenMaterial.length > 0 ? <LearnSection material={this.state.chosenMaterial} /> : '';
		return (
			<div className='main-page-component'>
				<div className='main-page-question'>
					<h1>What do I do with </h1>
					<Select
	                      value={this.state.chosenMaterial}
	                      className="materials-select"
	                      clearable={false}
	                      options={optionsArray}
	                      searchable={true}
	                      onChange={this.chooseMaterial.bind(this)}
	                  />
			        <h1>?</h1>
				</div>
		        <section>
		        	{learnSection}
		        </section>
			</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
ExampleComponent1 = connect(state => (mapStateToProps), null)(ExampleComponent1);
export default ExampleComponent1
