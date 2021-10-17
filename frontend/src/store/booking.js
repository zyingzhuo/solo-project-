import { csrfFetch } from "./csrf";

const ADD_BOOKING='booking/ADD_BOOKING';
const LOAD_BOOKINGS='booking/LOAD_BOOKING';
const DELETE_BOOKING='booking/DELETE_BOOKING'

const addOneBooking=(booking)=>({
    type: ADD_BOOKING,
    booking
})

const loadBookings=(bookings)=>({
    type: LOAD_BOOKINGS,
    bookings
})

const deleteOneBooking=(bookingId)=>({
    type: DELETE_BOOKING,
    bookingId
})

export const createTheBooking=(data)=>async(dispatch)=>{

const response=await csrfFetch(`/api/bookings`, {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
})

if(response.ok) {
    const booking=await response.json();
    dispatch(addOneBooking(booking));
    return booking
}

}

export const getBookings=(userId)=>async(dispatch)=>{
    const response=await csrfFetch(`/api/users/${userId}/bookings`)
    const bookings=await response.json();
    dispatch(loadBookings(bookings))
}


export const getOneBooking=( bookingId)=>async(dispatch)=>{

    const response=await csrfFetch(`api/bookings/${bookingId}`)
    if(response.ok) {
        const booking=await response.json();
        dispatch(addOneBooking(booking))
    }

}

export const deleteBooking=(bookingId)=>async(dispatch)=>{
    const response=await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'delete'
    })

    if(response.ok) {
        const booking=await response.json()
        dispatch(deleteOneBooking(booking.id))
        return booking
    }
}

const initialState={};

const bookingReducer=(state=initialState, action)=>{
   
    switch(action.type) {
        case ADD_BOOKING: {
           const newState={...state}
           newState[action.booking.id]=action.booking;
           return newState
        }
        case LOAD_BOOKINGS: {
            const newState={...state}
        action.bookings.forEach(booking=>{
        newState[booking.id]=booking
        })
        return newState;
        }
        case DELETE_BOOKING: {
            const newState={...state}
            delete newState[action.bookingId];
            return newState
        }
        default: {
            return state;
          }
    }




}

export default bookingReducer