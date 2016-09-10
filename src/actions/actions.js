export const initMap = (location, markers) => {
	return (dispatch, getState) => {
		const state = getState();
		dispatch(fetchedMarkers(location, markers));
	};
};

export const fetchedMarkers = (location, markers) => {
	return{
		type: ACTIONS.FETCHED_MAP,
		markers: markers,
		location: location
	};
};

export const ACTIONS = {
	FETCHED_MAP : "FETCHED_MAP",
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
	 	    {
	 	    	name: 'paper',
	 	    	types: [
	 	    		'Office Paper',
	 	    		'Magazines',
	 	    		'Newspaper',
	 	    		'Phonebooks',
	 	    		'Paperboard',
	 	    		'Direct/Junk Mail'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'cardboard',
	 	    	types: [
	 	    		'Corrugated Cardboard',
	 	    		'Cardboard Boxes'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'plastics',
	 	    	types: [
	 	    		'Plastic Bottles',
	 	    		'Grocery Store Bags'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'aluminun',
	 	    	types: [
	 	    		'Aluminun Cans',
	 	    		'Aluminun Foil'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'steel/tin',
	 	    	types: [
	 	    		'Steel Cans',
	 	    		'Tin Cans'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'glass',
	 	    	types: [
	 	    		'Glass Bottles',
	 	    		'Other Glass Containers'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'ink cartridges',
	 	    	types: [
	 	    		'Printer Cartridges'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'batteries',
	 	    	types: [
	 	    		'Household Batteries',
	 	    		'Car Batteries'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'oil',
	 	    	types: [
	 	    		'Cooking Oil',
	 	    		'Car Oil'
	 	    	]
	 	    },
	 	    {
	 	    	name: 'electronics',
	 	    	types: [
	 	    		'Computers',
	 	    		'Monitors',
	 	    		'Televisions',
	 	    		'Microwaves',
	 	    		'Other Appliances'
	 	    	]
	 	    }
 		]

 		dispatch(fetchedMaterialsList(list));
 	}
}
