import React, {Component} from 'react';
import {Box, Button, Container} from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form, ProgressBar, Image} from 'react-bootstrap';
// import MaterialTable from 'material-table';
import {PieChart, Pie, ResponsiveContainer, Cell, Sector, Label, Text} from 'recharts';
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
    <div >
        <Row>
            <Col sm={4}  className=" ml-4 mt-3 sample pb-3">
            <div className="row">
                <div className="col-4 ml-1"> <b>Top Categories </b>
                    {/* <h5 className="col-9 ml-2">  Top Categories </h5> */}
                </div>
                <div className="col-7 text-right"> This Month
                    {/* <h5 className="text-right ml-2"> This Month </h5> */}
                </div>
            </div>
            <Card className="mt-4">
                <Card.Header>
                    <div className="row no-gutters"> 
                        <div className="ml-4 col-9"> SMS </div>
                        <div className="text-right"> 2,000 </div> 
                    </div>

                    <div className="row no-gutters"> 
                        <div className="mb-2 col=2"> <Image src="holder.js/171x180" roundedCircle /> </div>
                        <div className="ml-2 col-10"> <ProgressBar variant="warning" now={40} /></div>
                    </div>
                </Card.Header>
                {/* <Card.Body variant="flush" className="row no-gutters"> </Card.Body> */}
                <Card.Header>
                    <div className="row no-gutters"> 
                        <div className="ml-4 col-9"> Emails </div>
                        <div className="text-right"> 8,000 </div> 
                    </div>

                    <div className="row no-gutters"> 
                        <div className="mb-2 col=2"> <Image src="holder.js/171x180" roundedCircle /> </div>
                        <div className="ml-2 col-10"> <ProgressBar variant="" now={85} /></div>
                    </div>
                </Card.Header>

                <Card.Header>
                    <div className="row no-gutters"> 
                        <div className="ml-4 col-9"> Print </div>
                        <div className="text-right"> 1,000 </div> 
                    </div>

                    <div className="row no-gutters"> 
                        <div className="mb-2 col=2"> <Image src="holder.js/171x180" roundedCircle /> </div>
                        <div className="ml-2 col-10"> <ProgressBar variant="success" now={15} /></div>
                    </div>
                </Card.Header>
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
                    label
                    >       
                    
                       
                       <Label  value={this.state.name} position="center">
                       </Label>

                    
                    
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

        </div>
    )
}
}

export default Home;