import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './contact.scss'
import Link from "next/link";

const Academy = () => <Layout>
<Head>
    <title>iCode Hub | Contact Us</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:400,800&display=swap" rel="stylesheet"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
</Head>
<header className="contact-header">
    <div className="container">
       <div className="row">

        <div className="col-sm-12 text-center pb-5">
            <h1 className="heading-one">
            Contact Us
            </h1>
        </div>
       </div>
       <div className="row">
           <div className="col-sm-4">
                <h2 className="heading-two pb-4">
                Contact Us On <br/> Social Media
                </h2>

                <div className="pb-5 social">
                    <span className="contact-icons"> <a href=""> <img src="/static/img/png/contactinstagram.png"/> </a> </span>
                    <span className="contact-icons"> <a href="https://twitter.com/icodehub" target="blank"> <img src="/static/img/png/contacttwitter.png"/> </a> </span>
                    <span className="contact-icons"> <a href=""> <img src="/static/img/png/contactlinkedin.png"/> </a> </span>
                    
                </div>
           </div>
           <div className="col-sm-4 pb-5 text-center">
                <h2 className="heading-two  pb-5">
                <i class="fas fa-map-marker-alt"></i>  Ile-Ife, Osun State.
                </h2>
                <a className="btn-send" href="#send-form">
                Send a message
                </a>
           </div>
           <div className="col-sm-4">
            <h2 className="heading-two">
            +234 703 036 0670 <br/>
            +234 814 726 1224
            </h2>
            <h3 className="heading-three">
                Email:
            </h3>
            <p className="paragraph-one">
                info@icodeinnovationhub.com <br/>
                academy@icodeinnovationhub.com
            </p>
           </div>
       </div>   
    </div> 
</header>

<section id="send-form" className="section-send">
    <div className="container">
        <div className="row">
           

            <div className="col-sm-6">
            <h1 className="heading-one">
            Send Message
            </h1>

           <p className="paragraph-one">

           Hope fully by now you had a good look around and if you think that we can work together and achieve what you are looking for, use the form below to drop us an email.          
            </p>
            <img className="img-fluid" src="/static/img/svg/email us.svg"/>

            </div>
            <div className="col-sm-2 pb-5"></div>

            <div className="col-sm-4">
            <form >
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label className="d-none" for="firstname">Firstname</label>
                    <input type="text" class="form-control" id="fistname" placeholder="First Name"/>
                    </div>
                    <div class="form-group col-md-6">
                    <label className="d-none" for="lastname">Last Name</label>
                    <input type="text" class="form-control" id="lastname" placeholder="Last Name"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label className="d-none" for="companyname">Company Name</label>
                    <input type="text" class="form-control" id="companyname" placeholder="Company Name"/>
                    </div>
                    <div class="form-group col-md-6">
                    <label className="d-none" for="phone">Phone Number</label>
                    <input type="tel" class="form-control" id="phonenumber" placeholder="Phone Number"/>
                    </div>
                </div>
                <div class="form-group">
                    <label className="d-none" for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <label className="d-none" for="message">Message</label>
                    <textarea rows="5" class="form-control" id="message" placeholder="Message"/>
                </div>
                <button type="submit" class="btn btn-primary">Send message</button>
            </form>
            
            </div>
        </div>
    </div>
</section>
</Layout>;

export default Academy;