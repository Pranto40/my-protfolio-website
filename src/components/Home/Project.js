import React from 'react';
import { Card } from 'react-bootstrap';
import project1 from '../../asserts/images/project01.png'

const Project = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>My Projects</h1>
            <div className="row">
            <div className="mb-4 col-lg-4 col-md-6 col-12">
            <Card>
                <Card.Img variant="top" src={project1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div>
                <a target='_blank' className='btn btn-success' href="https://pranto-car-accessories.web.app/">Live Site</a>
                </div>
                </Card.Body>
            </Card>
            </div>
            <div className="mb-4 col-lg-4 col-md-6 col-12">
            <Card>
                <Card.Img variant="top" src={project1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div>
                <a target='_blank' className='btn btn-success' href="https://pranto-car-accessories.web.app/">Live Site</a>
                </div>
                </Card.Body>
            </Card>
            </div>
            <div className="mb-4 col-lg-4 col-md-6 col-12">
            <Card>
                <Card.Img variant="top" src={project1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div>
                <a target='_blank' className='btn btn-success' href="https://pranto-car-accessories.web.app/">Live Site</a>
                </div>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    );
};

export default Project;