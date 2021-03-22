import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './contact.scss'
import Link from "next/link";
import ContactForm from "../components/ContactForm/ContactForm";

const Academy = () => <Layout>
<Head>
    <title>ExMedia | Grow your Startup</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        <meta name="description" content="How to increase startup revenue" />
            <meta name="keywords" content="social media marketing, startup marketing, grow your startup, startup revenue,social media, marketing, digital, SEO, increase profit, top marketing firm, best agency, revenue " />
            <meta name="author" content="Expression Media" />
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
            <div className=" col-sm-12 col-lg-4 center-pics">
                <img src="/static/img/svg/ben1.svg" alt="ben-anita picture" className="img-fluid animated fadeIn delay-1s"/>
            </div>
            <div className="col-sm-12 col-lg-2"></div>
            <div className="col-sm-12 col-lg-6">
                <h1 className="heading-one animated fadeIn delay-2s">
           
                </h1>
                <p className="paragraph-one animated fadeIn delay-3s">
                    Hi there!<br/>
                    We would like to hear from you.<br/>
                    Send us a Message now.
                </p>
            </div>


       </div>
    </div> 
</header>

    <ContactForm/>
</Layout>;

export default Academy;
