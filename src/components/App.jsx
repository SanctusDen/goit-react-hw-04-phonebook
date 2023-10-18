import React, { useEffect, useState } from 'react';

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './List/ContactList';

export const App = ({ handleDelete }) => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // const [contactsFilter, setContactsFilter] = useState([], '');

  // const handleFilterChange = e => {
  //   setFilter({ filter: e.target.value });
  // };

  const handleFilterChange = e => {
    setFilter({ filter: e.target.value });
  };

  const onSubmit = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  const getFoundContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    const recievedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (recievedContacts !== null) {
      setContacts(recievedContacts);
    }
  }, []);

  debugger;
  // const componentDidUpdate(_, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {

  //     try {
  //       const itemToSet = JSON.stringify(contacts);
  //       localStorage.setItem('contacts', itemToSet);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }
  useEffect(() => {
    if (setContacts !== contacts) {
      const itemToSet = JSON.stringify(contacts);
      localStorage.setItem('contacts', itemToSet);
    }
  }, [contacts]);

  const visibleContacts = getFoundContacts();

  return (
    <FormContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <ContactList contacts={visibleContacts} handleDelete={handleDelete} />
    </FormContainer>
  );
};
