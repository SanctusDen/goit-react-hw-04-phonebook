import React, { useEffect, useState } from 'react';

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './List/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() => parseLocalStorage() ?? []);
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const onSubmit = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  function parseLocalStorage() {
    try {
      const recievedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (recievedContacts) {
        return recievedContacts;
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleDelete = e => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== e.target.id)
    );
  };

  const getFoundContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase(contact.name))
    );
  };

  useEffect(() => {
    JSON.stringify(contacts);
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
