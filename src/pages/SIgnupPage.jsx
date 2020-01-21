import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedButtons from "../components/common/Button";
import AlertDialog from '../components/common/Popup';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%'
    }
  }
}));

const Wrapper = styled.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .buttonSpace {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    padding-bottom: 30px;
  }
  .MuiFormControl-root.MuiTextField-root {
    width: 100%;
    color: #00945f;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #00945f;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: green !important;
    color: #00945f;
  }
  .PrivateNotchedOutline-root-97.MuiOutlinedInput-notchedOutline {
    border-color: #00945f;
    color: #00945f;
  }
  .btn-success {
    background-color: #47ca65;
    border-color: #47ca65;
  }
  .rowPadding {
    padding-top: 20px;
  }
`;

const Signup = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [techTeam, setTechTeam] = useState('');
  const [password, setPassword] = useState('');
  const [groupMailId, setGroupMailId] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessLine, setBusinessLine] = useState('');

  const [openAlertDialog, setOpenAlertDialog] = useState(false);


  const onSubmitForm = (e) => {
    e.preventDefault();
    setOpenAlertDialog(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserName('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setTechTeam('');
    setPassword('');
    setGroupMailId('');
    setLeaderName('');
    setLeaderEmail('');
    setPhoneNumber('');
    setBusinessLine('');
  }
  return (
    <Wrapper>
      { openAlertDialog && <AlertDialog openAlert={openAlertDialog} />}
      <Form>

        <div className="row rowPadding">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="User Name"
                type="text"
                value={userName}
                variant="outlined"
                required
                onChange={e => setUserName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="First Name"
                type="text"
                value={firstname}
                variant="outlined"
                required
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Last Name"
                type="text"
                value={lastname}
                variant="outlined"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Email Id"
                type="email"
                value={email}
                variant="outlined"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Tech Team"
                type="text"
                value={techTeam}
                variant="outlined"
                required
                onChange={(e) => setTechTeam(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Password"
                type="password"
                value={password}
                variant="outlined"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Group Mail Id"
                type="email"
                value={groupMailId}
                variant="outlined"
                required
                onChange={(e) => setGroupMailId(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Leader Name"
                type="text"
                value={leaderName}
                variant="outlined"
                required
                onChange={(e) => setLeaderName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Business Line"
                type="text"
                value={businessLine}
                variant="outlined"
                required
                onChange={(e) => setBusinessLine(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Leader Email"
                type="email"
                value={leaderEmail}
                variant="outlined"
                required
                onChange={(e) => setLeaderEmail(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Phone Number"
                type="number"
                value={phoneNumber}
                variant="outlined"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">

          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="buttonSpace">
          <CustomizedButtons OnClick={(e) => handleReset(e)} value="Reset" />
          <CustomizedButtons  type="submit" OnClick={(e) => onSubmitForm(e)} value="Register" />
        </div>
      </Form>
    </Wrapper>
  );
};
export default Signup;
