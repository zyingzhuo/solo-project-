import { createContext, useState, useContext } from 'react';

export const EditFormContext = createContext();
export const useEditForm=()=>useContext(EditFormContext)

export default function EditFormProvider(props) {
  const [editForm, setEditForm] = useState(false);

  return (
    <EditFormContext.Provider
      value={{
        editForm,
        setEditForm
      }}
    >
      {props.children}
    </EditFormContext.Provider>
  )
}