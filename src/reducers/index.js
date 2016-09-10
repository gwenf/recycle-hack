import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'
import materialsReducer from './materialsReducer'
import locationReducer from './locationReducer'

const appReducer = combineReducers({
  exampleReducer,
  materialsReducer,
  locationReducer
})

const testApp = (state, action) => {
	switch (action.type) {
		case 'LOGGED_OUT':
		state = undefined;
	}

	return appReducer(state, action)
}
export default testApp