import { createReducer } from '@reduxjs/toolkit';
import * as types from './contactsTypes';

const initialState = {
  items: [],
  filtratedItems: [],
  contactExist: false,
};

const contactsReducer = createReducer(initialState, {
  [types.ADD_CONTACT]: (state, action) => {
    if (
      state.items.every(
        item =>
          item.name.toLocaleLowerCase() !==
          action.payload.item.name.toLocaleLowerCase(),
      )
    ) {
      return {
        ...state,
        contactExist: false,
        items: [...state.items, action.payload.item],
      };
    }
    return { ...state, contactExist: true };
  },
  [types.DELETE_CONTACT]: (state, action) => ({
    ...state,
    items: state.items.filter(item => item.id !== action.payload.id),
  }),
  [types.FILTRATE_CONTACTS]: (state, action) => ({
    ...state,
    filtratedItems: state.items.filter(item =>
      item.name.toLowerCase().includes(action.payload.filter.toLowerCase()),
    ),
  }),
  [types.GET_ITEMS]: (state, action) => ({
    ...state,
    items: [...action.payload.items],
  }),
});

export default contactsReducer;
