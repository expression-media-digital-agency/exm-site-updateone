import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './index.scss'
import Link from "next/link";
import NeedSolution from "../components/NeedSolution/NeedSolution";

const Index = () => <Layout>
<Head>
    <title>EXM | Home</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:400,800&display=swap" rel="stylesheet"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
</Head>
<header className="header">
    <div className="container">
       <div className="row">
        <div className="col-sm-8">
            <h1 className="header-one">
            We create quality Brand experience, and satisfaction. <br/>
            
            </h1>
 
            <p className="small-text">Passion. Innovation. Creativity.</p>


            <Link href="/work">
                <a className="header-btn">
                Hire Us!
                </a>
            </Link>
        </div>
        <div className="col-sm-4 ">
            <img src="/static/img/svg/ben.svg" alt="ben picture" className="img-fluid header-img"/>
        </div>
       </div>
    </div>    
</header>
<section className="section-choose">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <h2 className="heading-two text-center">Why Choose Us?</h2>

            </div>
            <div className="card-deck">
                <div className="card hvr-grow">
                    <img src="/static/img/svg/brand.svg" className="card-img-top" alt="branding picture"/>
                    <div className="card-body">
                        <h3 className="card-title">Branding</h3>
                        <p className="card-text">Our team makes your communication beautiful and intelligible. We clarify your message. We give meaning to your brand. We solve complex problems, but we do it with style and simplicity.</p>
                    </div>
                </div>
                <div className="card hvr-grow">
                    <img src="/static/img/svg/marketing1.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Digital Marketing</h3>
                        <p className="card-text">We help you to implement a digital marketing strategy that adapts to your business, allowing you to connect and interact with your current and potential customers.</p>
                    </div>
                </div>
                <div className="card hvr-grow">
                    <img src="/static/img/svg/softdev1.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Web Development</h3>
                        <p className="card-text">Our team takes the time to draw the contours of your software to ensure ergonomics and a successful user experience. All these using the latest trends in software development.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section-offer">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h2 className="heading-two text-center">
                    What we offer
                </h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/social-media 2.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Social Media Marketing
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/seo 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                SEO Page Building
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/analysis 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Analytics & Tracking
                </p>
            </div>

        </div>
        <div className="row pt-5">
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/Web development 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Web Design
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/contentM.svg"  className="img-fluid"/>
                <p className="paragraph-one">
                Content Marketing
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/Cross-Platform.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Cross-platform Advertising
                </p>
            </div>

        </div>
    </div>
</section>
<NeedSolution/>
</Layout>;

export default Index;