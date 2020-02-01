import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import App from './App';

const mapDispatchToProps = dispatch => ({
  onFiltrate: filter => dispatch(contactsActions.filtrateContacts({ filter })),
  onGetItemsFromStorage: items =>
    dispatch(contactsActions.getItemsFromLocalStorage({ items })),
});

const mapStateToProps = store => ({
  items: store.contacts.items,
  contactExist: store.contacts.contactExist,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
