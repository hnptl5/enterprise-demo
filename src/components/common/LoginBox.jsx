import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedButtons from '../common/Button';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import {connect} from "react-redux";
import {withRouter } from "react-router-dom";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/> 
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const Wrapper = styled.div`
  a:hover {
    text-decoration: none;
  }
  padding: 50px;
  .buttonSpace {
    display: flex;
    justify-content: space-between;
  }
  .form-group {
    margin-bottom: 3rem;
  }
  .MuiFormControl-root.MuiTextField-root {
    width: 100%;
    color:#00945F;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #00945F;
  }
  .MuiOutlinedInput-root.Mui-focused
  .MuiOutlinedInput-notchedOutline {
    border-color: green !important;
    color: #00945F
  }
  .PrivateNotchedOutline-root-97.MuiOutlinedInput-notchedOutline {
    border-color: #00945F;
    color: #00945F;
  }
  // .btn-success {
  //   background-color:#47ca65;
  //   border-color: #47ca65;
  // }
`;

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  // const [storedData, setStoredData] = React.useState('')
  const classes = useStyles('');

  let storedData;

  const onSubmitForm = (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/users/login';
    const userData = {
      email: email,
      password: password
    }
    
    axios.post(url, userData).then((res) => {
        // props.data = res.data;
        // debugger;
      if(res.data) {
        setOpen(true);
        console.log('logged in success full');
        window.location.href = "http://localhost:3000/main";
      } else {
        console.log('login is not successfull');
        setError(true);
      }
    }).catch((e) => {
      console.log('Something went wrong');
    })
  }

  const handleClose = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setError(false);
  }
  return (
    <Wrapper>
      <Snackbar onClose={handleClose} open={open} autoHideDuration={2000}>
        <Alert onClose={handleClose} severity="success">
          Sucessfully logged In!
        </Alert>
      </Snackbar>
      <Snackbar onClose={handleClose} open={error} autoHideDuration={2000}>
        <Alert onClose={handleClose} severity="error">
          Invalid Credentials!
        </Alert>
      </Snackbar>
      <Form autoComplete="off" onSubmit={onSubmitForm}>
        <Form.Group controlId="formBasicEmail">
          <TextField id="outlined-email" label="email" type="search" variant="outlined" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <TextField id="outlined-password" label="password" type="search" variant="outlined" required onChange={(e) => setPassword(e.target.value) } />
        </Form.Group>

        <div className="buttonSpace">
          <CustomizedButtons value="Sign In" type="submit" OnClick={(e) => { }} />
          <CustomizedButtons value="Forgot Password" OnClick={(e) => { }} />
          <a href="/signup"><CustomizedButtons value="Sign Up" OnClick={(e) => { }} /> </a>
        </div>
      </Form>
    </Wrapper>
  );
};
export default LoginBox;
