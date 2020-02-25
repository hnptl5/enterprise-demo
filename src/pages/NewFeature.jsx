import React, { useState, useEffect } from 'react';
import { Form, Table, Col, Row, InputGroup, FormControl, Card, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import '../components/css/feature.css';
import Upload from '../components/common/Upload';
import FeatureTable from '../components/common/FeatureTable';
// import TextField from '@material-ui/core/TextField';
// import CustomizedButtons from "../components/common/Button";
// import FeaturePopup from '../components/common/FeaturePopup';

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
`;

let selectApp = ["App", "Sample", "Example"];
let selectUseCase = [];
let featureID;
let templateID;

const NewFeature = () => {
let [app, setApp] = useState('');
let [useCase, setUseCase] = useState('');
let [featureID, setFeatureID] = useState('Feature ID');
let [templateID, setTemplateID] = useState('Template ID');


const handleUseCase = (app) => {


  if(app === "App"){
   selectUseCase = ["Case1", "Case2", "Case3"];
  }
   
  if(app === "Sample"){
   selectUseCase = ["Sample1", "Sample2", "Sample3"];
  }

  if(app === "Example"){
   selectUseCase = ["Example1", "Example2", "Example3"];
  }

  setFeatureID("Feature ID");
  setTemplateID("Template ID");
  setUseCase('Use Case');

}

const handleID = (payload) => {


if(payload){
  setFeatureID("ID #123");
  setTemplateID( "User #1234");
  }
}


  return (

<Form>
  <Row>
    <Col sm={6}>
      <Form.Group controlId="feature.ControlInput1">
        <Form.Label>Select App</Form.Label>
        <Form.Control as="select" placeholder="App"
          value={app}
          onChange= {e => (setApp(e.target.value), handleUseCase(e.target.value))}
        >

        {
          selectApp.map(e => {
          return(
          <option>{e}</option>
          )}
          )
        }        
        {/* {console.log(app)} */}
        </Form.Control>

      </Form.Group>
      </Col>
      <Col sm={6}>
      <Form.Group controlId="feature.ControlInput2">
        <Form.Label>Select USE Case</Form.Label>
        <Form.Control as="select" placeholder="USE Case"
        value={selectUseCase}
        onChange= {e => (setUseCase(e.target.value), handleID(e.target.value))}

        >
        {<option> {useCase} </option>}
         {
          selectUseCase.map(e => {
          return(
          <option>{e}</option>
          )}
          )
        }
        {console.log(useCase)}

        </Form.Control>
      </Form.Group>
      </Col>
    </Row>

  <Row>
    <Col sm={6}>
      <Form.Group controlId="feature.ControlInput1" className="mt-3">
        <Form.Control  placeholder={templateID} disabled>
        </Form.Control>
      </Form.Group>
      </Col>
      <Col sm={6}>
      <Form.Group controlId="feature.ControlSelect1" className="mt-3">
        <Form.Control  placeholder={featureID} disabled>
        </Form.Control>
      </Form.Group>
      </Col>
    </Row>

    <Row>
    <Col sm={12}>
    <Form.Group controlId="feature.ControlTextarea1" className="mt-3">
      <Form.Control as="textarea" rows="3" size="lg" placeholder="Description"/>
    </Form.Group>
    </Col>
    </Row>

      <Row>
        <Col sm={5}>
          <Table striped bordered hover responsive className="mb-5">
            <FeatureTable />
          </Table>
        </Col>

        <Col sm={4}>
          <Card className="">
            <Card.Header className="text-center"> Upload Documents </Card.Header>
            <Upload />
         </Card>
       </Col>
       </Row>
</Form>

  );
};

export default NewFeature;



