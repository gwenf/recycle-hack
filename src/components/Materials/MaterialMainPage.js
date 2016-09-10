import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getMaterialsList } from '../../actions/actions'

import LearnSection from './LearnSection'
import RecycleSection from './RecycleSection'
import ReuseSection from './ReuseSection'
import ReduceSection from './ReduceSection'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class MaterialMainPage extends Component {
	// componentWillMount(){
	// 	this.props.dispatch(getMaterialsList())
	// }
	componentWillMount(){
		var material = localStorage.getItem('chosenMaterial');

	}
	render(){
		return (
				<div className='main-area'>
					<div className='main-row'>
						<section>
				        	<h1 onClick={()=>{appHistory.push('/materials/learn')}}>Learn Section:</h1>
			        	</section>
						<section>
				        	<h1 onClick={()=>{appHistory.push('/materials/recycle')}}>Recycle Section:</h1>
			        	</section>
					</div>
		        	<div className='main-row'>
		        		<section>
				        	<h1 onClick={()=>{appHistory.push('/materials/reuse')}}>Reuse Section:</h1>
			        	</section>
			        	<section>
				        	<h1 onClick={()=>{appHistory.push('/materials/reduce')}}>Reduce Section:</h1>
			        	</section>
		        	</div>
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
MaterialMainPage = connect(state => (mapStateToProps), null)(MaterialMainPage);
export default MaterialMainPage