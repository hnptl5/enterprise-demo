import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button, Row, Col } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedButtons from '../components/common/Button';
import AlertDialog from '../components/common/Popup';
import CheckboxLabels from '../components/common/CheckBox';
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
    margin-top: 20px;
    padding-bottom: 30px;
  }

  .buttonSpace2{
    display: flex;
    margin-top: 20px;
    padding-bottom: 30px;
    justify-content: center;
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
  const [applicationID, setApplicationID] = useState('');
  const [lobName, setLobName] = useState('');
  const [productSupported, setProductSupported] = useState('');
  const [email, setEmail] = useState(false);
  const [sms, setSMS] = useState(false);
  const [print, setPrint] = useState(false);
  const [push, setPush] = useState(false);
  const [registrationDate, setRegistrationDate] = useState('');
  const [applicationEmail, setApplicationEmail] = useState('');
  const [applicationContact, setApplicationContact] = useState('');
  const [rulesBaseComm, setRulesBasedComm] = useState('');
  const [expectedComValue, setExpectedComValue] = useState('');
  const [expectedComValuePerDay, setExpectedComValuePerDay] = useState('');
  const [registrationTimestamp, setRegistrationTimestamp] = useState('');
  const [lobLeaderName, setLobLeaderName] = useState('');
  const [lobLeaderEmail, setLobLeaderEmail] = useState('');
  const [appLeaderName, setAppLeaderName] = useState('');
  const [appLeaderEmail, setAppLeaderEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [form, setForm] = useState('');
  const [applicationDesc, setApplicationDesc] = useState('');
  const [applicationApproverEmail, setApplicationApproverEmail] = useState('');
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const onSubmitForm = () => {
        setOpenAlertDialog(true);
  };

  const handleReset = e => {
    e.preventDefault();

    setApplicationName('');
    setApplicationID('');
    setLobName('');
    setRulesBasedComm('');
    setProductSupported('');
    setRegistrationDate('');
    setExpectedComValue('');
    setExpectedComValuePerDay('');
    setRegistrationTimestamp('');
    setLobLeaderName('');
    setLobLeaderEmail('');
    setAppLeaderName('');
    setAppLeaderEmail('');
    setApplicationContact('');
    setUserName('');
    setApplicationDesc('');
    setApplicationEmail('');
    setApplicationApproverEmail('');
  };

  return (
    <Wrapper>
      {openAlertDialog && <AlertDialog openAlert={openAlertDialog} />}
      <Form onSubmit={onSubmitForm} autoComplete="off">
        <div className="row rowPadding">
          <div className="col-md-4">

            {/* <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application ID"
                type="text"
                value={applicationID}
                variant="outlined"
                required
                onChange={e => setApplicationID(e.target.value)}
              />
            </Form.Group> */}

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
                label="Application Description"
                type="text"
                value={applicationDesc}
                variant="outlined"
                required
                onChange={e => setApplicationDesc(e.target.value)}
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
                label="Application Email"
                type="text"
                value={applicationEmail}
                variant="outlined"
                required
                onChange={e => setApplicationEmail(e.target.value)}
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
                type="text" //boolean
                value={rulesBaseComm}
                variant="outlined"
                required
                onChange={e => setRulesBasedComm(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Rule Based Communication"
                type="text" //boolean
                value={rulesBaseComm}
                variant="outlined"
                required
                onChange={e => setRulesBasedComm(e.target.value)}
              />
            </Form.Group> */}


            {/* <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Registration Date"
                type="text" //date
                value={registrationDate}
                variant="outlined"
                required
                onChange={e => setRegistrationDate(e.target.value)}
              />
            </Form.Group> */}

          </div>
          

          <div className="col-md-4">

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Expected Comm Volumne"
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
                label="Expected Comm Volumne per Day"
                type="text"
                value={expectedComValuePerDay}
                variant="outlined"
                required
                onChange={e => setExpectedComValuePerDay(e.target.value)}
              />
            </Form.Group>

{/* 
            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Registration Timestamp"
                type="text"
                value={registrationTimestamp}
                variant="outlined"
                required
                onChange={e => setRegistrationTimestamp(e.target.value)}
              />
            </Form.Group> */}

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application Approver Email"
                type="text"
                value={applicationApproverEmail}
                variant="outlined"
                required
                onChange={e => setApplicationApproverEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <TextField
                id="outlined-email"
                label="Application LOB Leader name"
                type="text"
                value={lobLeaderName}
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

      <Row>
        <Col sm={5} className="">
        <div className="buttonSpace2">
              <CustomizedButtons OnClick={(e) => handleReset(e)} value="Reset" size="large" />
        </div>
        </Col>
        <Col sm={2}>
        <div className="buttonSpace">
              <CustomizedButtons type="submit" size="large" OnClick={e => {}} value="SUBMIT" /> 
        </div>
        </Col>
      </Row>
      </Form>
    </Wrapper>
  );
};
