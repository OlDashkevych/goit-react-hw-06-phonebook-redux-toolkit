import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactListContainer from '../ContactList/ContactListContainer';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import Notification from '../Notification/Notification';
import styles from './App.module.css';
import slideTransition from '../Notification/transitions/slide.module.css';
import Logo from '../Logo/Logo';

class App extends Component {
  state = {
    filter: '',
  };

  static propTypes = {
    onFiltrate: PropTypes.func.isRequired,
    onGetItemsFromStorage: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    contactExist: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { filter } = this.state;
    const { onFiltrate, onGetItemsFromStorage } = this.props;
    onFiltrate(filter);
    const persistedContacts = localStorage.getItem('contacts');
    if (persistedContacts) {
      onGetItemsFromStorage(JSON.parse(persistedContacts));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { filter } = this.state;
    const { onFiltrate, items } = this.props;
    if (prevProps.items !== items || prevState.filter !== filter) {
      onFiltrate(filter);
      localStorage.setItem('contacts', JSON.stringify(items));
    }
  }

  setFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  render() {
    const { contactExist } = this.props;

    return (
      <div className={styles.container}>
        <Logo />
        <CSSTransition
          in={contactExist}
          timeout={1000}
          classNames={slideTransition}
          unmountOnExit
          onEntered={() => setTimeout(() => {}, 1000)}
        >
          <Notification />
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter onSetFilter={this.setFilter} />
        <ContactListContainer />
      </div>
    );
  }
}

export default App;
