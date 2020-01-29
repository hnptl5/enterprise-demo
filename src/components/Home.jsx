import React, {Component} from 'react';
import {Box, Button, Container} from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form, ProgressBar, Image} from 'react-bootstrap';
// import MaterialTable from 'material-table';
import {PieChart, Pie, ResponsiveContainer, Cell, Sector, Label, Text} from 'recharts';
import HomeComponent from './HomeComponent';
import './css/home.css';

const data = [
  {
    name: "Lending",
    content: "Use Cases 1 YTD 2,300",
    value: 4,
    index: 1
  },
  {
    name: "Online Banking",
    content: "Use Cases 1 YTD 2,300",
    value: 2,
    index: 2

  },
  {
    name: "Fraud",
    content: "Use Cases 1 YTD 2,300",
    value: 1,
    index: 3

  }
];

const messageData = [
  {
    name: "SMS",
    value: 2000,
    color: "warning"
  },
  {
    name: "Emails",
    value: 8000,
    color: ""

  },
  {
    name: "Print",
    value: 4000,
    color: "success"

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

        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
      />

    </g>
  );
}

class Home extends Component {

  state = {
    activeIndex: 0,
    name: 'Lending',
    content: ''
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
      name: data.name,
      content: data.content
    });

  };
   
   render(){
    return (
    <>
        <Row>
            <Col sm={4}  className=" ml-4 mt-3 sample pb-3">
            <div className="row no-gutters">
                <div className="col-4 ml-1"> <b>Top Categories </b> </div>
                <div className="col-7 text-right"> This Month </div>
            </div>

            <Card className="mt-3">
              <Card.Body className="pt-0 pb-0">
               <ListGroup variant="flush">
                  {
                    messageData.map(message => (
                      <HomeComponent data={message} />
                    ))
                  }
                </ListGroup>
              </Card.Body>
            </Card>

            </Col>

            <Col sm={4}>
            <ResponsiveContainer>
            {/* <Card style={{ height: "300px"}}> */}
            <Card className="mt-3">

            <Card.Header className="text-center"> 
                <h3> Use Case Tracker </h3>
            </Card.Header>

            <Card.Body>
              <PieChart width={350} height={250}>
                <Pie 
                    data={data} 
                    activeIndex = {this.state.activeIndex}
                    activeShape={renderShape}
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={70} 
                    outerRadius={80} 
                    fill="blue"
                    onMouseEnter={this.onPieEnter}
                    >       
                    
                       
                       <Label  value={this.state.name} position="center" />
    
                        {
                            data.map((entry, index) => (

                                <Cell 
                                    key={`cell-${index}`} 
                                    fill="blue"                                    
                                />

                                 )
                            )
                        }

                    </Pie>
                </PieChart>
              </Card.Body>
            </Card>
            </ResponsiveContainer>
            </Col>

            <Col sm={3}>
                <h3 className="text-center mt-4"> Graph </h3>
            </Col>
        </Row>

        </>
    )
}
}

export default Home;