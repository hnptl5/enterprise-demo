import React, {Component} from 'react';
import {Box, Button, Container} from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form, ProgressBar, Image} from 'react-bootstrap';
// import MaterialTable from 'material-table';
import {PieChart, Pie, ResponsiveContainer, Cell, Sector, Label, Text, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';
import HomeComponent from './HomeComponent';
import {ToggleButton, ToggleButtonGroup }  from '@material-ui/lab';
import './css/home.css';

const data = [
  {
    name: "Lending",
    content: "Use Cases 1 YTD 2,300",
    value: 4,
    index: 1,
    color: "green"
  },
  {
    name: "Online Banking",
    content: "Use Cases 1 YTD 2,300",
    value: 2,
    index: 2,
    color: "blue"

  },
  {
    name: "Fraud",
    content: "Use Cases 1 YTD 2,300",
    value: 1,
    index: 3,
    color: "red"

  }
];

const messageData = [
  {
    name: "SMS",
    value: 2000,
    color: "warning",
    bar: 23,
    dot: "orange"

  },
  {
    name: "Emails",
    value: 8000,
    color: "",
    bar: 65,
    dot: "blue"


  },
  {
    name: "Print",
    value: 4000,
    color: "success",
    bar: 41,
    dot: "purple"

  }
];

const graphData = [
  {

    pv: 2400,
    amt: 2400
  },

  {

    pv: 1398,
    amt: 2210
  },

  {
    pv: 9800,
    amt: 2290
  },

  {
    pv: 3908,
    amt: 2000
  },

  {
    pv: 4800,
    amt: 2181
  },

  {
    pv: 3800,
    amt: 2500
  },

  {
    pv: 4300,
    amt: 2100
  }
]

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
    content: '',
    pv: 9800
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
      name: data.name,
      content: data.content
    });
  };

  toggleButtons = (data, index) => {
    if(index === "center"){}
    if(index === "left"){}
    if(index === "right"){
      // this.setState({
      //   pv
      // });
    }
    debugger;
  }
   
   render(){
    return (
    <>
        <Row className="ml-2">
            <Col sm={4}  className="mt-3 sample pb-3">
            <div className="row no-gutters">
                <div className="col-5 ml-3 category-font"> <b>Top Categories </b> </div>
                <div className="col-6 text-right"> This Month </div>
            </div>
            
                  {
                    messageData.map(message => (
                      <HomeComponent data={message} />
                    ))
                  }


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
                    // fill="red"
                    onMouseEnter={this.onPieEnter}
                    >       
                    
                       
                       <Label  value={this.state.name}  position="center"/>
    
                        {
                            data.map((entry, index) => (

                                <Cell 
                                    key={`cell-${index}`} 
                                    fill= {entry.color}                                    
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

            <Col sm={4} className="sample mt-3">
                <h5 className="text-center mt-4"> <b>Outbound Communication Volumes </b> </h5>

                <LineChart 
                  width={425} 
                  height={200} 
                  data={graphData}
                  margin={{ top: 90, right: 30, left: 50, bottom: 5 }}>

                    <Tooltip />
                    <Line type="natural" dataKey="pv" stroke="white" strokeWidth= {10} dot={false}/>
                </LineChart>

                <ToggleButtonGroup
                    value
                    exclusive
                    data={graphData}
                    onChange ={this.toggleButtons}
                    aria-label="text alignment"
                    className="toggle"
                  >
                      
                      <ToggleButton value="left" aria-label="left aligned">
                         Today
                      </ToggleButton>
 
                      <ToggleButton value="center" aria-label="centered">
                          Week
                      </ToggleButton>

                      <ToggleButton value="right" aria-label="right aligned">
                          Month
                      </ToggleButton>
                                     
                </ToggleButtonGroup>
            </Col>
        </Row>

        </>
    )
}
}
export default Home;