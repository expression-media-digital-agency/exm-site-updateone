import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './about.scss'
import Footer from "../components/Footer/Footer";
import NeedSolutionOne from "../components/NeedSolutionOne/NeedSolutionOne";


const About = () => <Layout>
<Head>
    <title>ExMedia Digital | Grow your Startup</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        <meta name="description" content="Digital Marketing for Startups" />
            <meta name="keywords" content="social media marketing, startup marketing, grow your startup, startup revenue,social media, marketing, digital, SEO, increase profit, top marketing firm, best agency, revenue " />
            <meta name="author" content="Expression Media" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:400,800&display=swap" rel="stylesheet"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
</Head>
<header className="about-header">
    <div className="container">
       <div className="row">
        
        <div className="col-sm-12 col-lg-8">
            <h3 className="heading-three animated fadeIn delay-1s">
               
            </h3>
            <h1 className="heading-one animated fadeIn delay-2s">
                Get to Know Us
            </h1>
           <p className="paragraph-one animated fadeIn delay-3s">
                Your Startup Growth becomes Our Story
           </p>
        </div>

        <div className=" col-sm-12 col-lg-4 header-img animated fadeIn delay-2s">
            <img src="/static/img/svg/ben-anita.svg" alt="ben-anita picture" className="img-fluid"/>
        </div>
       </div>
    </div>    
</header>
<section className="section-about">
    <div className="container-fluid">
        <div className="row contents">
            <div className="col-sm-5 no-padding">
                <img src="/static/img/svg/about1.svg" alt="about-one" className="img-fluid"/>
            
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <p className="paragraph-one">
                    Our vision is to help build profitable startups across Africa, though data-driven Marketing.<br/><br/>
                    We are focused on making startups profitable, by helping startups generate and multiply sales online. <br/>
                    We are committed to help startups overcome the challenge of getting adequate sales for their products and services.
                </p>
            </div>
            <div className="col-sm-1"></div>

        </div>

        <div className="row contents">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <p className="paragraph-one">
                Our goal is simple: to make your startup goals become a reality.<br/><br/>      
                We want to partner with you to birth the vision for your startup.<br/>
                We are committed to going all the way with you to help you achieve your revenue targets in record time. While you are focused on building your products and services, We are focused on getting clients and customers for your products and services.
                </p>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 no-padding">
                <img src="/static/img/svg/about2.svg" alt="about-two" className="img-fluid"/>
            
            </div>
            

        </div>

        <div className="row contents">
            <div className="col-sm-5 no-padding">
                <img src="/static/img/svg/about3.svg" alt="about-three" className="img-fluid"/>
            
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <p className="paragraph-one">
                We are marketing experts that will help your Startup to generate & multiply sales for your products and services. Our Team will help you to get better results with your current marketing budget.<br/><br/>

                Our Creative team will deliver all those to you and more. Our team of marketing experts is made up of Strategists, Display Ads professionals, Social Media Auditors, Social Media Marketers, Visual experts, 
                    Ads Campaign Designers, Content Writers, and much more.
                </p>
            </div>
            <div className="col-sm-1"></div>

        </div>
    </div>
</section>
<NeedSolutionOne/>

</Layout>;

export default About;
