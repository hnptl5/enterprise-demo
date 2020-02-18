import React, {Component} from 'react';

import { Form, Table, Col, Row, Button } from 'react-bootstrap';


 let tableField = [
    {
        tr: "1",
        td: "Sample"
    },    
    {
        tr: "2",
        td: "Sample"
    },   
    {
        tr: "3",
        td: "Sample"
    },    
    {
        tr: "4",
        td: "Sample"
    }
];

let isTable = false

class FeatureTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            // isTable: false
        }

    this.addRow = this.addRow.bind(this);
    }



addRow = () => {

    console.log("Hello World");
    
    let newTable = {
        tr: "5",
        td: "New Sample"
    }

    tableField.push(newTable);
    console.log(tableField);

}
    
    render(){
    return (
    <>
         <thead>
            <tr>
              <th>#</th>
              <th>Template Attributes</th>
            </tr>
        </thead>
        <tbody>

            {tableField.map(fields => {
                return(
                    <tr>
                        <td> {fields.tr} </td>
                        <td> {fields.td} </td>
                    </tr>
                )
            })
            }

            {/* {this.addRow()} */}

            {/* <tr> <td> </td> <td> </td> </tr> */}
             
            
            <tr>
                <td colSpan="2" className="text-right"> 
                  <Button 
                  onClick={this.addRow}
                  > 
                  Add Row 
                  </Button> 
                </td>
            </tr>
        </tbody>
    </>
    )
    }
}

export default FeatureTable;