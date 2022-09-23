// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React from 'react';
import { Button, Card, TextField } from '@mui/material';

const ContactForm = ( {addContact} ) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    
    //state for new contact
    const [newContact, setNewContact] = React.useState({
        name: '',
        phone: '',
        email: '',
        photo: ''
    });

    // Buatlah handler untuk setiap input
    // Gunakan event.target.name dan event.target.value
    // untuk mengatur state newContact
    const handleChange = (event) => {
        setNewContact({
            ...newContact,
            [event.target.name]: event.target.value
        });
    };

    return (
        //form to add new contact
        <form>
            <Card sx={{ p: 2, m: 2 }}>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    name="name"
                    value={newContact.name}
                    onChange={handleChange}
                />
                <TextField
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    name="phone"
                    value={newContact.phone}
                    onChange={handleChange}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    name="email"
                    value={newContact.email}
                    onChange={handleChange}
                />
                <TextField
                    id="photo"
                    label="Photo URL"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    name="photo"
                    value={newContact.photo}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        //addnew contact to list
                        addContact(newContact);
                    }}

                >
                    Add Contact
                </Button>
            </Card>
        </form>
    );
}

export default ContactForm;