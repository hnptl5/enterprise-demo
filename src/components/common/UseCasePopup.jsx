import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomizedButtons from './Button';

export default function UseCasePopup({openAlert}) {
  const [open, setOpen] = React.useState(openAlert);

  const handleClose = () => {
    setOpen(false);
    window.location.href = '/main';
  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        onEscapeKeyDown={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          USE Case Created
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Your new USE Case has been added to your App
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomizedButtons OnClick={handleClose} value="Home" />
        </DialogActions>
      </Dialog>
    </div>
  )
}
