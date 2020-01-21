import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedButtons from '../components/common/Button';
import AlertDialog from '../components/common/Popup';
import CheckboxLabels from '../components/common/CheckBox';
// import GroupedButtons from '../components/common/GroupedButtons';
import CustomizedDividers from '../components/common/GroupedButtons';

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
  .checkBoxSectionDiv {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 50px 0;
  }
`;

export default () => {
  const [applicationName, setApplicationName] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [lobName, setLobName] = useState('');
  const [productSupported, setProductSupported] = useState('');

  // const [chanelType, setChanelType] = useState('');
  // const [chanelType, setChanelType] = useState('');
  // const [chanelType, setChanelType] = useState('');
  // const [chanelType, setChanelType] = useState('');

  const [email, setEmail] = useState(false);
  const [sms, setSMS] = useState(false);
  const [print, setPrint] = useState(false);
  const [push, setPush] = useState(false);

  const [appplicationEmailId, setAppplicationEmailId] = useState('');
  const [applicationContact, setApplicationContact] = useState('');
  const [rulesBaseComm, setRulesBasedComm] = useState('');
  // const [registrationDate, setRegistrationDate] = useState('');
  // const [registrationTime, setRegistrationTime] = useState('');
  const [expectedComValue, setExpectedComValue] = useState('');
  const [expectedComValuePerDay, setExpectedComValuePerDay] = useState('');
  const [approverEmail, setApproverEmail] = useState('');
  const [lobLeaderName, setLobLeaderName] = useState('');
  const [lobLeaderEmail, setLobLeaderEmail] = useState('');
  const [appLeaderName, setAppLeaderName] = useState('');
  const [appLeaderEmail, setAppLeaderEmail] = useState('');

  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const onSubmitForm = () => {
    setOpenAlertDialog(true);
  };

  const handleReset = e => {
    e.preventDefault();
    // setUserName('');
    // setFirstName('');
    // setLastName('');
    // setEmail('');
    // setTechTeam('');
    // setPassword('');
    // setGroupMailId('');
    // setLeaderName('');
    // setLeaderEmail('');
    // setPhoneNumber('');
    // setBusinessLine('');
  };
  return (
    <Wrapper>
      {openAlertDialog && <AlertDialog openAlert={openAlertDialog} />}
      <Form onSubmit={onSubmitForm} autoComplete="off">
        <div className="row rowPadding">
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Name"
                type="text"
                value={applicationName}
                variant="outlined"
                required
                onChange={e => setApplicationName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Date"
                type="text"
                value={applicationDate}
                variant="outlined"
                required
                onChange={e => setApplicationDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="LOB Name"
                type="text"
                value={lobName}
                variant="outlined"
                required
                onChange={e => setLobName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Product Supported"
                type="text"
                value={productSupported}
                variant="outlined"
                required
                onChange={e => setProductSupported(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Email ID"
                type="text"
                value={appplicationEmailId}
                variant="outlined"
                required
                onChange={e => setAppplicationEmailId(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Contact"
                type="text"
                value={applicationContact}
                variant="outlined"
                required
                onChange={e => setApplicationContact(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Rule Based Communication"
                type="text"
                value={rulesBaseComm}
                variant="outlined"
                required
                onChange={e => setRulesBasedComm(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Expected Comm Value"
                type="text"
                value={expectedComValue}
                variant="outlined"
                required
                onChange={e => setExpectedComValue(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Expected Comm Value per Day"
                type="text"
                value={expectedComValuePerDay}
                variant="outlined"
                required
                onChange={e => setExpectedComValuePerDay(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Appplication Approver Email"
                type="text"
                value={approverEmail}
                variant="outlined"
                required
                onChange={e => setApproverEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application LOB Leader name"
                type="text"
                value={lobLeaderEmail}
                variant="outlined"
                required
                onChange={e => setLobLeaderName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Lob Leader Email"
                type="text"
                value={lobLeaderEmail}
                variant="outlined"
                required
                onChange={e => setLobLeaderEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Leader Name"
                type="text"
                value={appLeaderName}
                variant="outlined"
                required
                onChange={e => setAppLeaderName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Leader Email"
                type="text"
                value={appLeaderEmail}
                variant="outlined"
                required
                onChange={e => setAppLeaderEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="User Name"
                type="text"
                // value={userName}
                variant="outlined"
                required
                // onChange={e => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="User Name"
                type="text"
                // value={userName}
                variant="outlined"
                required
                // onChange={e => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="User Name"
                type="text"
                // value={userName}
                variant="outlined"
                required
                // onChange={e => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="User Name"
                type="text"
                // value={userName}
                variant="outlined"
                required
                // onChange={e => setUserName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <h5>Select applicable communication types</h5>
            <div className="checkBoxSectionDiv">
              <div>
                <label>Email</label>
                <CheckboxLabels checked={email} onChange={()=> setEmail(true)}/>
              </div>

              <div>
                <label>SMS</label>
                <CheckboxLabels checked={sms} onChange={()=> setSMS(true)}/>
              </div>

              <div>
                <label>Print</label>
                <CheckboxLabels checked={print} onChange={()=> setPrint(true)}/>
              </div>

              <div>
                <label>Push</label>
                <CheckboxLabels checked={push} onChange={()=> setPush(true)}/>
              </div>
            </div>

            <div style={{display:'flex', flexDirection: 'row'}}>
            <CustomizedDividers />
            </div>
          </div>
        </div>

        <div className="buttonSpace">
          <CustomizedButtons type="submit" size="large" OnClick={e => {}} value="SUBMIT" />
        </div>
      </Form>
    </Wrapper>
  );
};
