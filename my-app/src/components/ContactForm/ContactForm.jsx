import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import * as contactsActions from '../../redux/contacts/contactsActions';

class ContactForm extends Component {
  static propTypes = {
    onAddItem: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.number) {
      this.props.onAddItem({ ...this.state, id: uuid() });
    }
    this.clearState();
  };

  clearState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          maxLength="36"
          placeholder="Enter your name..."
          onChange={this.handleChange}
          value={name}
          required
        />
        <input
          maxLength="10"
          name="number"
          type="number"
          placeholder="Enter your number..."
          onChange={this.handleChange}
          value={number}
          required
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddItem: item => dispatch(contactsActions.addAction({ item })),
});

export default connect(null, mapDispatchToProps)(ContactForm);
