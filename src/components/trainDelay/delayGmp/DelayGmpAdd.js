import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import firebase from '../../../firebase/Firebase';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DelayGmpAdd() {
  const [id, setId] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [trainName, setTrainName] = useState('');
  const [trainType, setTrainType] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [delayTime, setDelayTime] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [open, setOpen] = React.useState(false);
  const ref = firebase.firestore().collection('Delay/DEOGHAR/Docs');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function addData(newData) {
    ref
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
    handleClose();
  }

  return (
    <div>
      <Button variant="contained" size="large" color="warning" startIcon={<AddIcon />} onClick={handleClickOpen}>
        Add New Delay
      </Button>
      <BootstrapDialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h2>Add New DELAY</h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextField
            sx={{ m: 2, width: 200 }}
            disabled
            id="outlined-disabled"
            label="ID Auto Generated"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <TextField
            sx={{ m: 2, width: 200 }}
            id="outlined-basic"
            label="Train No"
            variant="outlined"
            value={trainNo}
            onChange={(e) => setTrainNo(e.target.value)}
          />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Train Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={trainName}
              label="Train Name"
              onChange={(e) => setTrainName(e.target.value)}
            >
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="GANGA SAGAR">GANGA SAGAR</MenuItem>
              <MenuItem value="PURBA EXPRESS">PURBA EXPRESS</MenuItem>
              <MenuItem value="RAJDHANI EXPRESS">RAJDHANI EXPRESS</MenuItem>
              <MenuItem value="MITHLA EXPRESS">MITHLA EXPRESS</MenuItem>
              <MenuItem value="NETAJI EXPRESS">NETAJI EXPRESS</MenuItem>
              <MenuItem value="SAMPARK KRANTI EXP">SAMPARK KARANTI EXP</MenuItem>
              <MenuItem value="DURONTO EXPRESS">DURONTO EXPRESS</MenuItem>
              <MenuItem value="Rajarata Rejini">Rajarata Rejini</MenuItem>
              <MenuItem value="Ruhunu Kumari">Ruhunu Kumari</MenuItem>
              <MenuItem value="Muthu Kumari">Muthu Kumari</MenuItem>
              <MenuItem value="Samudra Devi">Samudra Devi</MenuItem>
              <MenuItem value="Galu Kumari">Galu Kumari</MenuItem>
              <MenuItem value="Sagarika">Sagarika</MenuItem>
              <MenuItem value="Sri Devi">Sri Devi</MenuItem>
              <MenuItem value="Meena Gaya">Meena Gaya</MenuItem>
              <MenuItem value="Denuwara Manike">Denuwara Manike</MenuItem>
              <MenuItem value="Pulathisi">Pulathisi</MenuItem>
              <MenuItem value="Dakshina">Dakshina</MenuItem>
              <MenuItem value="HOWRAH SF Express">Airport Express</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, width: 200 }}>
            <InputLabel id="demo-simple-select-label">Train Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={trainType}
              label="Train Type"
              onChange={(e) => setTrainType(e.target.value)}
            >
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="Slow">Slow</MenuItem>
              <MenuItem value="Semi Express">Semi Express</MenuItem>
              <MenuItem value="Mail Express">Express</MenuItem>
              <MenuItem value="Intercity">Intercity</MenuItem>
              <MenuItem value="SuperFast Express">Night Mail</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={destination}
              label="Destination"
              onChange={(e) => setDestination(e.target.value)}
            >
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Lucknow">Lucknow</MenuItem>
              <MenuItem value="Haryana">Haryana</MenuItem>
              <MenuItem value="DEOGHAR">DEOGHAR</MenuItem>
              <MenuItem value="Barddhman">Barddhman</MenuItem>
              <MenuItem value="BATA NAGAR">BATA NAGAR</MenuItem>
              <MenuItem value="Kalutara South">Kalutara South</MenuItem>
              <MenuItem value="DURGAPUR">DURGAPUR</MenuItem>
              <MenuItem value="Kankesanturai">Kankesanturai</MenuItem>
              <MenuItem value="Kurunegala">Kurunegala</MenuItem>
              <MenuItem value="BARDDHAMAN">BARDDHAMAN</MenuItem>
              <MenuItem value="Bande">Bandel</MenuItem>
              <MenuItem value="Matale">Matale</MenuItem>
              <MenuItem value="Matara">Matara</MenuItem>
              <MenuItem value="Saktighar">Saktighar</MenuItem>
              <MenuItem value="Moratuwa">Moratuwa</MenuItem>
              <MenuItem value="Panadura">Panadura</MenuItem>
              <MenuItem value="Durgapur">DURGAPUR</MenuItem>
              <MenuItem value="Rambukkana">Rambukkana</MenuItem>
              <MenuItem value="Rathmalana">Rathmalana</MenuItem>
              <MenuItem value="Talaimannar">Talaimannar</MenuItem>
              <MenuItem value="Trincomalee">Trincomalee</MenuItem>
              <MenuItem value="Vavuniya">Vavuniya</MenuItem>
              <MenuItem value="UP">UP</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ m: 2, width: 200 }}
            id="time"
            label="Departure Time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
          />
          <TextField
            sx={{ m: 2, width: 200 }}
            id="time"
            label="Delay Time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={delayTime}
            onChange={(e) => setDelayTime(e.target.value)}
          />
          <br />
          <TextField
            id="date"
            label="Date"
            type="date"
            sx={{ m: 2, width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            sx={{ m: 2, width: 532 }}
            id="outlined-basic"
            label="Reason"
            variant="outlined"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <br />
          <TextField
            sx={{ m: 2, width: 500 }}
            id="outlined-multiline-static"
            label="Notes"
            multiline
            rows={5}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ m: 1 }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => addData({
              id: uuidv4(), trainNo, trainName, trainType, destination, departureTime, delayTime, date, reason, note, createdAt: new Date()
            })}
          >
            Save
          </Button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Button
            variant="outlined"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
