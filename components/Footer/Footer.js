import React from 'react';
import Link from 'next/link';
import FooterForm from '../Footer-form/Footer-form';
import './Footer.scss'

const Footer = () =>  (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3 className="footer-heading">Explore</h3>
                                
                                <li>
                                    <Link href="/index">
                                        <a className="footer-text">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className="footer-text">About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a className="footer-text">Contact Us</a>
                                    </Link>
                                </li>
                                
                        </div>

                        <div className="col-sm-3">
                            <h3 className="footer-heading">Contact Us</h3>
                            <li className="footer-text">
                                exmdigitalagency@gmail.com
                            </li>
                                 <li className="footer-text">
                                +(234)8169732091
                            </li>
                            <li className="footer-text">
                                
                            </li>
                            <li className="icons">
                                <span> <a href="https://www.facebook.com/exmediadigital/" target="_blank"><img src="/static/img/svg/facebookic.svg" alt="facebook"/></a></span>
                                <span><a href="https://www.instagram.com/exmediadigital/" target="_blank"><img src="/static/img/png/instagramwhite.png" alt="instagram"/></a></span>
                                <span><a href="https://twitter.com/exmediadigital" target="_blank"><img src="/static/img/svg/twitteric.svg" alt="twitter"/></a></span>
                            </li>
                        </div>

                        <div className="col-sm-2"></div>

                        <div className="col-sm-4">
                            <h3 className="footer-heading">Would you like to get our Special Offers?</h3>
                            <FooterForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center copyright">
                            <p className="footer-text ">Copyright 2021 (c) Expression Media Digital Agency</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );

export default Footer;
