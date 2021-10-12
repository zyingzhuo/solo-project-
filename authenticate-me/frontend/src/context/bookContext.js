import { createContext, useState, useContext } from 'react';

export const BookingContext = createContext();
export const useBooking=()=>useContext(BookingContext)

export default function BookingProvider(props) {
  const [booking, setBooking] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking
      }}
    >
      {props.children}
    </BookingContext.Provider>
  )
}