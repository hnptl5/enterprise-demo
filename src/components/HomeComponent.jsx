import React from 'react';
import {Image, ProgressBar, ListGroup} from 'react-bootstrap'


const HomeComponent = ({data}) => {
    return (
        <>
    <ListGroup.Item>
    <div className="row no-gutters"> 
        <div className="col-9 ml-5 pl-4"> {data.name} </div>
        <div className="text-right"> {data.value}</div> 
    </div>
    
    <div className="row no-gutters mb-5"> 
        <div className=" col-2 dot mr-3"> <Image src={"/" + data.dot + ".png"} roundedCircle /> </div>
        <div className=" col-9"> <ProgressBar variant={data.color} now={data.bar} /></div>
    </div>
    </ListGroup.Item>
    </>
    )
}

export default HomeComponent