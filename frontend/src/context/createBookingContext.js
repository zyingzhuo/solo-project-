import { createContext, useState, useContext } from 'react';

export const CreateBookingContext = createContext();
export const useCreateBookingForm=()=>useContext(CreateBookingContext)

export default function CreateBookingFormProvider(props) {
  const [createBooking, setCreateBooking] = useState(false);

  return (
    <CreateBookingContext.Provider
      value={{
        createBooking,
        setCreateBooking
      }}
    >
      {props.children}
    </CreateBookingContext.Provider>
  )
}