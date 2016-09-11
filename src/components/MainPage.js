import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMaterialsList, setCurrentMaterial } from '../actions/actions'
import Select from 'react-select'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import LearnSection from './Materials/LearnSection'
import RecycleSection from './Materials/RecycleSection'
import ReuseSection from './Materials/ReuseSection'
import ReduceSection from './Materials/ReduceSection'

import Leaderboard from './Leaderboard'

class ExampleComponent1 extends Component {
	constructor(){
		super();
		this.state = {
			chosenMaterial: ''
		}
	}
	chooseMaterial(val){
		var chosenMaterial = val.value;
		this.setState({
			chosenMaterial
		})
		localStorage.setItem('chosenMaterial', chosenMaterial)
		appHistory.push('/materials');
		// this.props.dispatch(setCurrentMaterial(chosenMaterial))
	}
	componentWillMount(){
		this.props.dispatch(getMaterialsList())
	}
	componentWillUpdate(){
		// if (this.state.chosenMaterial.length > 0){
		// 	this.props.dispatch(getMaterialsList(this.state.chosenMaterial))
		// }
	}
	render(){
		var optionsArray = [];
		if (this.props.materials){
			this.props.materials.map(function(val, i){
				optionsArray.push({label: val.name, value: val.name})
			})
		}
		return (
			<div className='main-page-component'>
				<div className='main-page-question'>
					<h1>What do I do with</h1>
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
				<Leaderboard />
			</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials,
    	currentMaterial: state.materialsReducer.currentMaterial
    };
};
ExampleComponent1 = connect(state => (mapStateToProps), null)(ExampleComponent1);
export default ExampleComponent1
