import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        console.log(state);
        console.log(action.payload);
        state.push(action.payload);
      },
      prepare: (contactName, contactPhone) => {
        const id = nanoid();
        return { payload: { id, contactName, contactPhone } };
      },
    },
  },
  deleteContact(state, action) {
    const index = state.findIndex(contact => contact.id === action.peyload);
    state.splice(index, 1);
  },
});
export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { filterContacts } = filterSlice.actions;
