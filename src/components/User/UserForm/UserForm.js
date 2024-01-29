import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled components using Material-UI's styled function
const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '300px',
  margin: '0 auto',
});

function UserForm() {
  // Define state variables to store user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any form validation or data processing here
    console.log('Submitted:', { name, email, age });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Age"
        variant="outlined"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Button variant="contained" type="submit">Submit</Button>
    </FormContainer>
  );
}

export default UserForm;
