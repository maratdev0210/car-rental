import { DialogContent, DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

// dialog window attached to the Buy button
export default function DialogBuy({open, handleClickOpen, handleClose}) {
    /*const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    } */

    return(
        <React.Fragment>
            <Dialog 
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form', 
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    }
                }}
            >
                <DialogTitle>Subscrie</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        some text
                    </DialogContentText>
                    <TextField 
                        autoFocus 
                        required 
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth 
                        variant="standard"
                    ></TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}