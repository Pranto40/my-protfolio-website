import React from 'react';
import { Card } from 'react-bootstrap';
import project1 from '../../asserts/images/project01.png'

const Project = () => {
    return (
        <div className='container'>
            <h1>My Projects</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                {/* <Link href="https://pranto-car-accessories.web.app/">
                    <a target="_blank">line site</a>
                </Link> */}
            </Card>
        </div>
    );
};

export default Project;