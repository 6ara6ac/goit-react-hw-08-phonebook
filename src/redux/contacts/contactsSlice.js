import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "redux/auth/operations";

const initialContactsState = {
    contacts: [],
    isLoading: false,
    error: null
}

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.error;
  };
    
  
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
        extraReducers: {
            [fetchContacts.pending]: handlePending,
            [fetchContacts.rejected]: handleRejected,
            [deleteContact.pending]: handlePending,
            [deleteContact.rejected]:handleRejected,
            [addContact.pending]: handlePending,
            [addContact.rejected]: handleRejected,
            [fetchContacts.fulfilled](state, action) {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            },
            [addContact.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            },
            [deleteContact.fulfilled](state, action) {
              state.isLoading = false;
              state.error = null;
              const idx = state.contacts.findIndex(contact => contact.id === action.payload.id)
              state.contacts.splice(idx,1)
            },
            [logOut.fulfilled](state) {
             state.items = [];
             state.error = null;
             state.isLoading = false;
           },
        }
    
  })


//   export const {addContacts, deleteContact} = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer



 