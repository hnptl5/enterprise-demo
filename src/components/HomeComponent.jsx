import React from 'react';
import {Image, ProgressBar, ListGroup} from 'react-bootstrap'


const HomeComponent = ({data}) => {
// debugger;
console.log(data);
    return (
        <>
    <ListGroup.Item>
    <div className="row no-gutters"> 
        <div className="ml-4 col-9"> {data.name} </div>
        <div className="text-right"> {data.value}</div> 
    </div>

    <div className="row no-gutters mb-5"> 
        <div className="mb-2 col=2"> <Image src="holder.js/171x180" roundedCircle /> </div>
        <div className="ml-2 col-10"> <ProgressBar variant={data.color} now={data.bar} /></div>
    </div>
    </ListGroup.Item>
    </>
    )
}

export default HomeComponent