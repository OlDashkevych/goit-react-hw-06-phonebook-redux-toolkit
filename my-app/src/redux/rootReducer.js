import { combineReducers } from 'redux';
import contactsReducers from './contacts/contactsReducers';

const rootReducer = combineReducers({
  contacts: contactsReducers,
});

export default rootReducer;
