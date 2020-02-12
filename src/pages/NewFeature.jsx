import React, { useState, useEffect } from 'react';
import { Form, Table, Col, Row, InputGroup, FormControl, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import '../components/css/feature.css';
import Upload from '../components/common/Upload';
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

const NewFeature = () => {

  return (

<Form>
  <Row>
    <Col sm={6}>
      <Form.Group controlId="feature.ControlInput1">
        <Form.Label>Select App</Form.Label>
        {/* <Form.Control type="email" placeholder="name@example.com" /> */}
        <Form.Control as="select" placeholder="App">
          <option>App</option>
          <option>App</option>
          <option>App</option>
          <option>App</option>
          <option>App</option>
        </Form.Control>
      </Form.Group>
      </Col>
      <Col sm={6}>
      <Form.Group controlId="feature.ControlSelect1">
        <Form.Label>Select USE Case</Form.Label>
        <Form.Control as="select" placeholder="USE Case">
          <option>USE Case</option>
          <option>USE Case</option>
          <option>USE Case</option>
          <option>USE Case</option>
          <option>USE Case</option>
        </Form.Control>
      </Form.Group>
      </Col>
    </Row>
    <Row>
    <Col sm={12}>
    <Form.Group controlId="feature.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows="3" size="lg" placeholder="Description"/>
    </Form.Group>
    </Col>
    </Row>

      <Row>
        <Col sm={4}>
          <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>  
              <InputGroup size="lg" >
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  
                />
            </InputGroup>
            </td>
      </tr>
      
      <tr>
        <td>2</td>
        <td>Jacob</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Sam</td>
      </tr>
    </tbody>
  </Table>
  </Col>

  <Col sm={4}>
      <Card className="" >
        <Card.Header className="text-center"> Upload Documents </Card.Header>
        <Upload />
      </Card>
  </Col>
  </Row>
</Form>

  );
};

export default NewFeature;



