import React from 'react';
import AboutImg from '../../asserts/images/about.jpeg'

const About = () => {
    return (
        <div className='my-5'>
           <h1 className='text-center'>About Me</h1>
           <div>
           <div className='container my-5'>
           <div className="row">
               <div style={{width: "30rem"}} className="col-md-5 mt-5 img-thumbnail">
                   <img className='img-fluid' src={AboutImg} alt="" />
               </div>
               <div className="col-md-7 d-flex align-items-center">
                   <div className='ms-5'>
                   <div className='content'>
                   I am expert in React JS, HTML, CSS, Tailwind, bootstrap and familiar with Node JS, Express JS, and MongoDB. I am very passionate and dedicated to my work. I have more than 1 years of work experience. And enjoy working in a team or individual. I love designing for the web, and making beautiful things that work everywhere.
                   <ul>
                       <li>Phone - +8801909762840</li>
                       <li>Email - dulalahammedpranto01@gmail.com</li>
                       <li>Address - Sherpur, Mymensingh, Bangladesh</li>
                       <li>Languages - Bangla, English</li>
                   </ul>
                   </div>
                   </div>
               </div>
           </div>
        </div>
           </div>
        </div>
    );
};

export default About;