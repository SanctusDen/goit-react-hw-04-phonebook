import React, { useState } from 'react';

import { Form } from 'components/formContainer/formDiv.styled';
import { Label, Field, SubmitBtn } from './ContactForm-module';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const [options, setOptions] = useState({ name: '', number: '' });

  const handleChange = e => {
    setOptions({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      id: nanoid(),
    });

    // this.setState({
    //   name: '',
    //   number: '',
    // });
    setOptions.reset();
    // e.currentTarget.reset();
  };

  // const onChange = handleChange();

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Field
        onChange={handleChange}
        value={options.name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Field
        onChange={handleChange}
        value={options.number}
        type="tel"
        name="number"
        pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitBtn type="submit">Add Contact</SubmitBtn>
    </Form>
  );
};

export default ContactForm;
