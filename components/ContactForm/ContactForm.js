import React from 'react';
import './ContactForm.scss'
const ContactForm = () => (
            <section className="contact-form ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5 col-sm-12 form-left-side">
                            <h1 className="heading-one">
                                Contact Information
                            </h1>

                            {/* <p className="paragraph"><img className="img-fluid pr-3" src="/static/img/svg/location.svg"/> Gibson House, No 12 Flatten building, Ile Ife.</p> */}
                            <p className="paragraph"><img className="img-fluid pr-3" src="/static/img/svg/message.svg"/> info@exmediaagency.com</p>
                            <p className="paragraph"><img className="img-fluid pr-3" src="/static/img/svg/whatsapp.svg"/> +234(0) 81 4945 6123</p>

                            <h2 className="heading-two">
                                We are actively social
                            </h2>
                            
                            <li className="icons">
                                <span> <a href="https://www.facebook.com/exmdigitalagency/" target="_blank"><img className="img-fluid" src="/static/img/svg/facebook.svg" alt="facebookicon"/></a></span>
                                <span> <a href="https://www.instagram.com/exmdigital/" target="_blank"><img className="img-fluid" src="/static/img/png/instagramwhite.png" alt="instagramicon"/></a></span>
                                <span> <a href="https://twitter.com/exmdigital" target="_blank"><img className="img-fluid" src="/static/img/svg/twitter.svg" alt="twittericon" /></a></span>
                            </li>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7 form-right-side">
                            <form method="POST" action="https://formspree.io/exmdigitalagency@gmail.com">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input name="name"  type="text" className="form-control" id="name"
                                               aria-describedby="emailHelp" placeholder="Name" required/>
                                    </div>
                                </div>
    
                                <div className="form-row">
                                    <div className="form-group col-md-12 col-sm-12">
                                        <input name="email"   type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-12 col-sm-12">
                                        <input name="company"   type="text" className="form-control" id="company"
                                               placeholder="Company"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12 col-sm-12">
                                        <textarea  className="form-control" name="message" id="textarea"
                                                 rows="4" placeholder="Message" required/>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-contact hvr-grow-shadow">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );

export default ContactForm;
