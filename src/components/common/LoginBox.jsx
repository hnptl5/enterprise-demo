import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedButtons from '../common/Button'

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
  const classes = useStyles();
  return (
    <Wrapper>
      <Form autoComplete="off">
        <Form.Group controlId="formBasicEmail">
          <TextField id="outlined-email" label="username" type="search" variant="outlined" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <TextField id="outlined-password" label="password" type="search" variant="outlined" required />
        </Form.Group>

        <div className="buttonSpace">
          <CustomizedButtons value="Sign In" OnClick={(e) => { }} />
          <CustomizedButtons value="Forgot Password" OnClick={(e) => { }} />
          <a href="/signup"><CustomizedButtons value="Sign Up" OnClick={(e) => { }} /> </a>
        </div>
      </Form>
    </Wrapper>
  );
};
export default LoginBox;
