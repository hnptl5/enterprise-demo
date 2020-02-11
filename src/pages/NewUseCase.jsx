import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedButtons from "../components/common/Button";
import UseCasePopup from '../components/common/UseCasePopup';

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

const NewUseCase = () => {
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

  
  const handleReturn = () => {
    window.location.href = '/case';
  }

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
      { openAlertDialog && <UseCasePopup openAlert={openAlertDialog} />}
      <Form>

        <div className="row rowPadding">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="New USE Case"
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
                label="New USE Case"
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
                label="New USE Case"
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
                label="New USE Case"
                type="text"
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
                label="New USE Case"
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
                label="New USE Case"
                type="text"
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
                label="New USE Case"
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
                label="New USE Case"
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
                label="New USE Case"
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
                label="New USE Case"
                type="email"
                value={leaderEmail}
                variant="outlined"
                required
                onChange={(e) => setLeaderEmail(e.target.value)}
              />
            </Form.Group>
          </div>
          {/* <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-4">

          </div>
          <div className="col-md-2"></div> */}
        </div>
        <div className="buttonSpace">
          <CustomizedButtons OnClick={(e) => handleReturn(e)} value="Back" />
          <CustomizedButtons OnClick={(e) => handleReset(e)} value="Reset" />
          <CustomizedButtons  type="submit" OnClick={(e) => onSubmitForm(e)} value="Create" />
        </div>
      </Form>
    </Wrapper>
  );
};
export default NewUseCase;
