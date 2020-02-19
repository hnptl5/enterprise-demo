import React, {useState} from 'react';

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

let isTable = false;

const FeatureTable = () => {

let [addRow, setAddRow] = useState(tableField);

const addNewRow = (currentRows) => {

    console.log("Hello World");

    let newTable = 
        {
            tr: "5",
            td: "New Sample"
         }

    addRow = currentRows.concat(newTable);
    

    setAddRow(addRow);
    // isTable = true;
    // newTable.push(currentRows)
    // debugger;
    // tableField.push(newTable);
    // addRow.push(newTable);
    // setAddRow(newTable);

    console.log(addRow);

}

    return (
    <>
         <thead>
            <tr>
              <th>#</th>
              <th>Template Attributes</th>
            </tr>
        </thead>
        <tbody>

            {addRow.map(fields => {
                return(
                    <tr>
                        <td> {fields.tr} </td>
                        <td> {fields.td} </td>
                    </tr>
                )
            })
            }

            {/* {isTable && addNewRow()} */}
            { 
                // (isTable  && <tr> <td> 5 </td> <td> </td> </tr>)
            }
            
            <tr>
                <td colSpan="2" className="text-right"> 
                  <Button 
                  value={addRow}
                  onClick={ () => {addNewRow(addRow)}}
                  > 
                  Add Row 
                  </Button> 
                </td>
            </tr>
        </tbody>
    </>
    )
}

export default FeatureTable;