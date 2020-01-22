import React, {Component} from 'react';
import {Box, Button, Container} from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form } from 'react-bootstrap';
// import MaterialTable from 'material-table';
import {PieChart, Pie, ResponsiveContainer, Cell, Sector, Label} from 'recharts';
import './css/home.css';

const data = [
  {
    "name": "Lending",
    "value": 4
  },
  {
    "name": "Online Banking",
    "value": 2
  },
  {
    "name": "Fraud",
    "value": 1
  }
];


const renderShape = props => {

  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={"#000"}
        fontWeight={"bold"}
        fontSize={"1.5rem"}
      >
        {/* ${" "}
        {payload.value.toLocaleString(navigator.language, {
          minimumFractionDigits: 2
        })} */}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
}
class Home extends Component {
  state = {
    activeIndex: 0
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };
   
   render(){
    return (
        
    <div >
        <Row>
            <Col sm={3}  className=" ml-3 mt-3 sample pb-3">
             <h5 className="ml-2">  Top Categories This Month </h5>

            <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush" className="">
                <ListGroup.Item>SMS</ListGroup.Item>
                <br />
                <ListGroup.Item>Emails</ListGroup.Item>
                <br />
                <ListGroup.Item>Print</ListGroup.Item>
                <br />
                <ListGroup.Item>Push Notification</ListGroup.Item>
            </ListGroup>
            </Card>

            </Col>

            <Col>
            <ResponsiveContainer>
              <PieChart width={730} height={250}>
                <Pie data={data} 
                
                    activeIndex = {this.state.activeIndex}
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60} 
                    outerRadius={80} 
                    fill="blue"
                    onMouseEnter={this.onPieEnter}
                    // label
                    >
                    
                    <Label position="center"> Use Case Tracker </Label>

                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="blue"/>
                             )
                            )
                        }
                        
                  {/* <Pie data={data} cx="50%" cy="50%" outerRadius={80} innerRadius={60}>
                                      <Label position={"center"}> Use Cases </Label>

                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="blue"/>
                            ))
                        } */}
                  </Pie>
            </PieChart>
            </ResponsiveContainer>
            </Col>

            <Col>
                <h3 className="text-center mt-4"> Graph </h3>
            </Col>
        </Row>

        </div>
    )
}
}

export default Home;