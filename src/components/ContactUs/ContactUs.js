import React from 'react';
import emailjs from 'emailjs-com';
const ContactUs = () => {
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_bg4l6zk', 'template_t4qd8e2', e.target,'HG4i7E9235j3ldtL4').then(res => {
            console.log(res);
        }).catch(err => console.log(err))
        e.target.reset()
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://i.ibb.co/Zmf9d4T/contact-Us.jpg" alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='w-100 text-center'>
                    <h1 className=' m-3 text-primary'>Contact Us</h1>
                    <form onSubmit={sendEmail}>
                        <input className='w-75' type="text" name='name' placeholder='Name' />
                        <br />
                        <input className='my-3 w-75' type="text" name='user_email' placeholder='Email' />
                        <br />
                        <textarea className='w-75' type="text" name="message" id="" cols="20" rows="5" placeholder='Message'></textarea>
                        <br />
                        <input className='btn btn-success mt-3' type="button" value="Submit" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;