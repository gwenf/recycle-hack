export const exampleAction = (testData) => {
  return {
    type: 'TESTING_DATA',
    testData
  };
};

export const updateCurrentLocationAction = (location) =>{
  return{
    type: ACTIONS.LOCATION_UPDATE,
    location
  };
};

export const ACTIONS = {
  LOCATION_UPDATE : "LOCATION_UPDATE",
};
