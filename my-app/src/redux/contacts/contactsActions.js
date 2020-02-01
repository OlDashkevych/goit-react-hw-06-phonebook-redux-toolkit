import { createAction } from '@reduxjs/toolkit';
import * as types from './contactsTypes';

export const addAction = createAction(types.ADD_CONTACT);

export const deleteAction = createAction(types.DELETE_CONTACT);

export const getItemsFromLocalStorage = createAction(types.GET_ITEMS);

export const filtrateContacts = createAction(types.FILTRATE_CONTACTS);
