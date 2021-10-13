import { csrfFetch } from './csrf';


const ADD_SPOT = 'spots/ADD_SPOT';
const LOAD_SPOTS='spots/LOAD_SPOTS'
const DELETE_SPOT='spots/DELETE_SPOT'

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



export const createSpot = (data) =>async (dispatch)=>{
    console.log(3333333333)
    const response = await csrfFetch(`/api/spots`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(44444444444)
      if (response.ok) {
        const spot = await response.json();
        //console.log('$$$$$$$$',spot)
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


export const deleteSpot=(spotId)=>async(dispatch)=>{
   console.log('!!!!!!!!!!!')
   const response= await csrfFetch(`/api/spots/${spotId}`, {
     method: 'delete'
   });
   
   if(response.ok) {
     const spot=await response.json();
     dispatch(deleteOneSpot(spot.id))
     return spot
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
              default: {
                return state;
              }
              
  }
        }
    

export default spotReducer
