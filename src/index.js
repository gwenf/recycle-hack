import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {Provider} from 'react-redux';
import { store, dispatch } from './store/store'

import MainPage from './components/MainPage'
import PointSystem from './components/PointSystem'

import 'react-select/dist/react-select.css';
import './styles/app.sass';

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={App}>
				<Route path='/' component={MainPage} />
				<Route path='/example' component={PointSystem} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root'));
