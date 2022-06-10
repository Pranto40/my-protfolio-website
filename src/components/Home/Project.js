import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css'

const Project = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>My Projects</h1>
            <div className="row">
            <div className="mb-4 col-lg-4 col-md-6 col-12 card-group">
            <Card>
                <div className="box box1">
                </div>
                <Card.Body>
                    <Card.Title>(Pranto car accessories)</Card.Title>
                    <Card.Text>
                    <div className="p">● Email and Google login system implemented via Firebase.</div>
                    <div className="p">● Implemented dashboard for users who can add reviews and can see orders.</div>
                    <div className="p">● An admin can manage all orders in the dashboard, add new products for the site, and
                    manage products.</div>
                    <strong>Technology Used:</strong> Tailwind CSS, React.js, Firebase, Firebase react hooks, React hook form ,
                    Express.js, MongoDB
                    </Card.Text>
                    <div>
                    <a target='_blank' className='btn btn-success' href="https://pranto-car-accessories.web.app/">Live Site</a>
                </div>
                </Card.Body>
            </Card>
            </div>
            <div className="mb-4 col-lg-4 col-md-6 col-12 card-group">
            <Card>
                <div className="box box2">
                </div>
                <Card.Body>
                    <Card.Title>(grocery-stock)</Card.Title>
                    <Card.Text>
                    <div className="p">● Email and Google login system implemented via Firebase.</div>
                    <div className="p">● Will be able to update products from Inventory Items.</div>
                    <div className="p">● Items can be removed and added from the Manage Inventory section</div>
                    <strong>Technology Used:</strong> React.js, React Bootstrap, Firebase, Firebase react hooks, Express.js,
                    MongoDB
                    </Card.Text>
                    <div>
                <a target='_blank' className='btn btn-success' href="https://grocery-stock-f2e6a.web.app/">Live Site</a>
                </div>
                </Card.Body>
            </Card>
            </div>
            <div className="mb-4 col-lg-4 col-md-6 col-12 card-group">
            <Card>
                <div className="box box3">
                </div>
                <Card.Body>
                    <Card.Title>(Palwan fitness club)</Card.Title>
                    <Card.Text>
                     <div className="p">● Login/Register with (email, password, google )</div>
                     <strong>Technology Used:</strong> React.js, React Bootstrap, Firebase, Firebase react hooks
                    </Card.Text>
                    <div>
                <a target='_blank' className='btn btn-success' href="https://palwan-fitness-club.netlify.app/">Live Site</a>
                </div>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    );
};

export default Project;