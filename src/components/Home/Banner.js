import React from 'react';
import './Banner.css';
import bannerImg from '../../asserts/images/pranto.jpg'

const Banner = () => {
    return (
        <div className='container my-5'>
           <div className="row">
               <div className="col-md-7 d-flex align-items-center">
                   <div>
                   <div className='content'>
                   <div className="heding">
                    <h1>Hello, I'm <span>Dulal Ahammed Pranto</span></h1>
                        </div>
                        <h2>I'm fond end <span>web developer</span>.</h2>
                        <p>This is my official portfolio website. I am a web developer. I can html css. I always try to learning and something new every day. I love my work.</p>
                   </div>
                        <a target='_blank' className='btn btn-success' href="https://drive.google.com/file/d/1GOZq6j-zi3JMV-lGzRi1bbBqNlBGY5I0/view">My Resume</a>
                   </div>
               </div>
               <div className="col-md-5 mt-5">
                   <img className='img-fluid' src={bannerImg} alt="" />
               </div>
           </div>
        </div>
    );
};

export default Banner;