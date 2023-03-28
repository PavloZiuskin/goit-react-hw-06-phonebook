// import { createReducer } from '@reduxjs/toolkit';

// import { addContact, deleteContact, filterContacts } from './action';
// const initialState = {
//   contacts: [],
//   filter: '',
// };

// export const contactsReducer = createReducer(initialState.contacts, {
//   [addContact]: (state, action) => {
//     return state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     const index = state.findIndex(contact => contact.id === action.peyload);
//     state.splice(index, 1);
//   },
// });

// export const filterReducer = createReducer(initialState.filter, {
//   [filterContacts]: (state, action) => {
//     return (state = action.payload);
//   },
// });
