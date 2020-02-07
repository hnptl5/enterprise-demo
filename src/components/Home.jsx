import React, {Component} from 'react';
import {Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form, ProgressBar, Image} from 'react-bootstrap';
// import MaterialTable from 'material-table';
import {PieChart, Pie, ResponsiveContainer, Cell, Sector, Label, Text, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';
import HomeComponent from './HomeComponent';
import {ToggleButton, ToggleButtonGroup }  from '@material-ui/lab';
import './css/home.css';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(name, useCase, status) {
  return { name, useCase, status };
}

const rows = [
  createData('Zoosk', 159, "Pending"),
  createData('Online Banking', 237, "Complete"),
  createData('Lending', 237, "Complete"),
  createData('Business Banking', 121, "Complete")

];

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

let graphData = [
  {
    pv: 2400
  },

  {
    pv: 1398
  },

  {
    pv: 9800
  },

  {
    pv: 3908
  },

  {
    pv: 4800
  },

  {
    pv: 3800
  },

  {
    pv: 4300
  }
]

const updateGraph = (graphData) => {
}


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
    graphData: [{}]
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
      name: data.name,
      content: data.content
    });
  };

  toggleButtons = (data, index) => {

    if(index === "left"){
      graphData = [{pv: 1200}, {pv: 800},{pv: 1},{pv: 3000},{pv: 2600},{pv: 2800}, {pv: 3400}]
      this.setState({graphData: graphData});
    }

    if(index === "center"){
      graphData = [{pv: 900}, {pv: 1200},{pv: 70},{pv: 1600},{pv: 2200},{pv: 1800}, {pv: 3000}]
      this.setState({graphData: graphData});
    }
    
     if(index === "right"){
      graphData = [{pv: 2000}, {pv: 1500},{pv: 1100},{pv: 1800},{pv: 900},{pv: 600}, {pv: 500}]
      this.setState({graphData: graphData});
     }

  }
   
   render(){
    return (
    <>
      <ResponsiveContainer width="100%" height={450}>

        <Row className="ml-1 mt-2">
            <Col sm={4}  className="mt-3 sample pb-3 ml-5">
            <div className="row no-gutters">
                <div className="col-5 ml-3 category-font"> <b>Top Categories </b> </div>
                <div className="col-6 text-right"> This Month </div>
            </div>
            
                  {
                    messageData.map(message => (
                      <HomeComponent data={message}/>
                    ))
                  }


            </Col>

            <Col sm={4} className="sample outbound-position">
                <h5 className="text-center mt-4"> <b>Outbound Communication Volumes </b> </h5>

                <LineChart 
                  width={425} 
                  height={200} 
                  data={graphData}
                  margin={{ top: 90, right: 30, left: 50, bottom: 10 }}>

                    <Tooltip />
                    <Line type="natural" dataKey="pv" stroke="white" strokeWidth= {10} dot={false}/>
                </LineChart>

                <ToggleButtonGroup
                    value
                    exclusive
                    graphData={graphData}
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
            </ResponsiveContainer>

            
      <Row>
            <Col sm={4}>
    <TableContainer component={Paper} className="case-table">
      <Table className="" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>App</StyledTableCell>
            <StyledTableCell>USE Case</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell>{row.useCase}</StyledTableCell>
              <a href="/case"><StyledTableCell>{row.status}</StyledTableCell></a>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Col>


        <Col sm={4}>
            <Card className="tracker">

            <Card.Header className="text-center"> 
                <h3> Use Case Tracker </h3>
            </Card.Header>

            <Card.Body>
              <PieChart width={350} height={200}>
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
            </Col>
      </Row>

        </>
    )
}
}
export default Home;