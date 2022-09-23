import './App.css';
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { Grid } from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  //state for contacts
  const [contacts, setContacts] = React.useState(contactsJSON);
  //handler for new contact
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactForm addContact={addContact} />
        </Grid>
        <Grid item xs={12} md={6}>
          {contacts.map((contact) => (
            <Contact data={contact} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
