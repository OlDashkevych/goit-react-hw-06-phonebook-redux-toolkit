import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  filtratedItems: store.contacts.filtratedItems,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteAction({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
