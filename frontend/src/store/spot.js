import { csrfFetch } from './csrf';


const ADD_SPOT = 'spots/ADD_SPOT';
const LOAD_SPOTS='spots/LOAD_SPOTS'
const DELETE_SPOT='spots/DELETE_SPOT'
const LOAD_MYSPOTS='spots/LOAD_MYSPOTS'


const addOneSpot = (spot) => ({
    type: ADD_SPOT,
    spot
  });

const loadSpots=(spots)=>({ 
  
  type: LOAD_SPOTS,
  spots
  
})

const deleteOneSpot=(spotId)=>({
  type: DELETE_SPOT,
  spotId
})

const loadMySpots=(spots)=>({
  type: LOAD_MYSPOTS,
  spots
})


export const createSpot = (data) =>async (dispatch)=>{
   
    const response = await csrfFetch(`/api/spots`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        const spot = await response.json();
        
        dispatch(addOneSpot(spot));
        return spot;
      }
    
}


export const getOneSpot=(id)=>async(dispatch)=>{

  const response=await csrfFetch(`/api/spots/${id}`);

  if(response.ok) {
    const spot=await response.json();
    dispatch(addOneSpot(spot))
  }
}


export const getSpots=()=>async(dispatch)=>{
  const response= await csrfFetch('/api/spots');
  const spots=await response.json();
  dispatch(loadSpots(spots))
}

export const getMySpots=(userId)=>async(dispatch)=>{
  const response=await csrfFetch(`/api/users/${userId}/spots`)
  const spots=await response.json();
  dispatch(loadMySpots(spots))
}


export const deleteSpot=(spotId)=>async(dispatch)=>{
   
   const response= await csrfFetch(`/api/spots/${spotId}`, {
     method: 'delete'
   });
   
   if(response.ok) {
     const spot=await response.json();
     dispatch(deleteOneSpot(spot.id))
     return spot
   }
}


export const updateSpot=(data)=>async(dispatch)=>{
  const response=await csrfFetch(`/api/spots/${data.id}`, {
    method:'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if(response.ok) {
    const updatedSpot=await response.json();
    dispatch(addOneSpot(updatedSpot));
    return updatedSpot
  }
}


const initialState={}


const spotReducer = (state=initialState, action)=>{
    switch(action.type) {
      case LOAD_SPOTS: {
        const newState={...state}
        action.spots.forEach(spot=>{
        newState[spot.id]=spot
        })
        return newState;
      }
        case ADD_SPOT: {
          
            // const newState = {
            //     ...state,
            //     [action.spot.id]: action.spot
            //   };
            //   const spotsList = Object.values(newState)
              
            //   spotsList.map((id) => newState[id]);
            //   spotsList.push(action.spot);
            //   //newState.list = sortList(pokemonList);
            //   return newState;
            const newState={...state}
           newState[action.spot.id]=action.spot;
           return newState
            }

        case DELETE_SPOT: {
           const newState={...state};
           delete newState[action.spotId];
           return newState
        }

        case LOAD_MYSPOTS: {
          return action.spots
        }
              default: {
                return state;
              }
              
  }
        }
    

export default spotReducer
