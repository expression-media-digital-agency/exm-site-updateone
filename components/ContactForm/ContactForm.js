import React from 'react';
import './ContactForm.scss'
const ContactForm = () => (
            <section className="contact-form ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 form-left-side">
                            <h1 className="heading-one">
                                Contact Information
                            </h1>
                        </div>
                        <div className="col-sm-7 form-right-side">
                            <form method="POST" action="https://formspree.io/exmdigitalagency@gmail.com">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input name="name"  type="text" className="form-control" id="name"
                                               aria-describedby="emailHelp" placeholder="Name" required/>
                                    </div>
                                </div>
    
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input name="email"   type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-12">
                                        <input name="company"   type="text" className="form-control" id="company"
                                               placeholder="Company"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <textarea  className="form-control" name="message" id="textarea"
                                                 rows="4" placeholder="Message" required/>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-contact">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );

export default ContactForm;


