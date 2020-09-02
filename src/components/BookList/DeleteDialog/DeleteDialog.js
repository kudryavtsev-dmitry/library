import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function DeleteDialog({openDialog, handleDialogClose,handleDeleteBook}) {

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы уверены что хотите удалить книгу?
                     </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleDialogClose} color="primary">
                        Нет
                     </Button>
                    <Button onClick={handleDeleteBook} color="primary" autoFocus>
                        Да
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}