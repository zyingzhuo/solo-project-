import { csrfFetch } from './csrf';


const ADD_SPOT = 'spots/ADD_SPOT';

const addOneSpot = (spot) => ({
    type: ADD_SPOT,
    spot
  });

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

const initialState={}


const spotReducer = (state=initialState, action)=>{
    switch(action.type) {
        case addOneSpot: {
            const newState = {
                ...state,
                [action.spot.id]: action.spot
              };
              const spotsList = Object.values(newState)
              
              spotsList.map((id) => newState[id]);
              spotsList.push(action.spot);
              //newState.list = sortList(pokemonList);
              return newState;

            }
              default:
              return state;
  }
        }
    

export default spotReducer
