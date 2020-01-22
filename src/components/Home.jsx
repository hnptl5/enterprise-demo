import React, {Component} from 'react';
import {Box, Button, Container} from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form } from 'react-bootstrap';
// import MaterialTable from 'material-table';
import {PieChart, Pie, ResponsiveContainer, Cell, Sector} from 'recharts';

const data1 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
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

   
   render(){
    return (
        
    <div>
        <Row>
            <Col className=" ml-3 mt-3">
             <h5> Top Categories  This Month </h5>

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
                <Pie data={data1} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60} 
                    outerRadius={80} 
                    fill="#82ca9d" 
                    label />
            </PieChart>
            </ResponsiveContainer>
            </Col>

            <Col>
                <h3> Graph </h3>
            </Col>
        </Row>

        </div>
    )
}
}

export default Home;