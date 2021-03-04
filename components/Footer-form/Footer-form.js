
import React from 'react';
import './FooterForm.scss'

const FooterForm = () =>  (
        <div>
            <form className="footer-form" method="POST" action="https://formspree.io/f/meqpbnzw">
                <div className="form-group">
                    <input type="name" className="form-control input" id="name" placeholder="Your name."/>
                </div>
                <div className="form-group">
                <input type="email" className="form-control input" id="email" placeholder="Your email."/>
                </div>
                <div className="float-right">
                    <button type="submit" className="btn btn-footer hvr-grow-shadow">Send</button>
                </div>
            </form>
        </div>
    );

export default FooterForm;
