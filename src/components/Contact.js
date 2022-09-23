// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    // contact is an object with name, phone, email, and photo
    // const { name, phone, email, photo } = contact;
    const { name, phone, email, photo } = data;
    return (

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img src={data.photo} alt={data.name} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary={data.name}
                    secondary={
                        <Typography>
                            {data.phone}
                            <br/>
                            {data.email}
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    );
};

export default Contact;
