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

export const setCurrentMaterial = (material) => {
	return {
		type: 'SET_CURRENT_MATERIAL',
		currentMaterial: material
	}
}


export function getMaterialsList(){
 	return (dispatch, getState) => {

 	    //Fetch state
 	    const state = getState()

 	    var list = [
	 	    {
	 	    	name: 'paper',
	 	    	types: [
	 	    		{
	 	    			type: 'Office Paper',
	 	    			description: 'Recycle Paper...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Magazines',
	 	    			description: 'Recycle Paper...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Newspaper',
	 	    			description: 'Recycle Paper...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Phonebooks',
	 	    			description: 'Recycle Paper...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Paperboard',
	 	    			description: 'Recycle Paper...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Direct/Junk Mail',
	 	    			description: 'Recycle Paper...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'cardboard',
	 	    	types: [
	 	    		{
	 	    			type: 'Corrugated Cardboard',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Cardboard Boxes',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'plastics',
	 	    	types: [
	 	    		{
	 	    			type: 'Plastic Bottles',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Grocery Store Bags',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'aluminun',
	 	    	types: [
	 	    		{
	 	    			type: 'Aluminun Cans',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Aluminun Foil',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'steel/tin',
	 	    	types: [
	 	    		{
	 	    			type: 'Steel Cans',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Tin Cans',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'glass',
	 	    	types: [
	 	    		{
	 	    			type: 'Glass Bottles',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Other Glass Containers',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'ink cartridges',
	 	    	types: [
	 	    		{
	 	    			type: 'Printer Cartridges',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'batteries',
	 	    	types: [
	 	    		{
	 	    			type: 'Household Batteries',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Car Batteries',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'oil',
	 	    	types: [
	 	    		{
	 	    			type: 'Cooking Oil',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Car Oil',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'electronics',
	 	    	types: [
	 	    		{
	 	    			type: 'Computers',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Monitors',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Televisions',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Microwaves',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Other Appliances',
	 	    			description: 'Recycle Cardboard...',
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    }
 		]

 		dispatch(fetchedMaterialsList(list));
 	}
}
