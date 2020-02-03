import React from 'react';
import {Image, ProgressBar, ListGroup, Card} from 'react-bootstrap'


const HomeComponent = ({data}) => {
    return (
        <>
    <Card className="mt-3 ">
        <Card.Body className="pt-0 pb-0 no-gutters">
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <div className="row no-gutters"> 
                        <div className="col-8 ml-5 pl-4"> {data.name} </div>
                        <div className="text-right"> {data.value}</div> 
                    </div>
                    
                    <div className="row no-gutters mb-3"> 
                        <div className=" col-2 dot mr-3"> <Image src={"/" + data.dot + ".png"} roundedCircle /> </div>
                        <div className=" col-9"> <ProgressBar variant={data.color} now={data.bar} /></div>
                    </div>
                </ListGroup.Item>
             </ListGroup>
        </Card.Body>
    </Card>


    
    </>
    )
}

export default HomeComponent