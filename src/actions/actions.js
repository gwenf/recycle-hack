export const exampleAction = (testData) => {
  return {
    type: 'TESTING_DATA',
    testData
  };
};
export const fetchedMaterialsList = (list) => {
  return {
    type: 'GET_MATERIALS_LIST',
    materials: list
  };
};


export function getMaterialsList(){
	return (dispatch, getState) => {

	    //Fetch state
	    const state = getState()

	    var list = [
			'paper',
			'plastic',
			'aluminun',
			'glass',
			'ink cartridges',
			'oil'
		]

		dispatch(fetchedMaterialsList(list));
	  }
}