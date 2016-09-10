import {ACTIONS} from "../actions/actions"

/** coords of Lafyette */
const initialState = {
    latitude: 40.4049599,
    longitude: -86.9282559
}

function locationReducer(state = initialState, action){
    switch (action.type) {
        case ACTIONS.LOCATION_UPDATE:
            return {
                latitude: action.location.coords.latitude,
                longitude: action.location.coords.longitude
            }
        default:
            return state;
    };
};
export default locationReducer