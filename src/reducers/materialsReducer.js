function materialsReducer(state = '', action){
  switch (action.type) {
    case 'GET_MATERIALS_LIST':
      return {
      	...state,
      	materials: action.materials
      }
    default:
      return state;
  };
};
export default materialsReducer