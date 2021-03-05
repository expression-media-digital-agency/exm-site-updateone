import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './index.scss'
import Link from "next/link";
import NeedSolution from "../components/NeedSolution/NeedSolution";
import 'normalize.css'

const Index = () => <Layout>
<Head>
    <title>ExMedia Digital | Best of Digital Marketing</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        <meta name="google-site-verification" content="kmbrx57bxpG7mnv9qSUcjLAbULlGQwDRthw8Zid_gyY" />
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
<header className="header">
    <div className="container">
       <div className="row">
        <div className="col-sm-12 col-lg-7">
            <h1 className="header-one animated fadeIn delay-1s">
            Grow Your Startup Revenue with ExMedia Digital.
            
            </h1>
 
            <p className="small-text animated fadeIn delay-2s">Multiply sales Online with Digital Marketing</p>


            <Link href="/contact">
                <a className="header-btn hvr-grow-shadow animated fadeInUp delay-3s" >
                Hire Us Now!
                </a>
            </Link>
        </div>
        <div className="col-sm-12 col-lg-5 center-pics animated fadeIn delay-2s ">
            <img src="/static/img/svg/homepics2.svg" alt="home picture" className="img-fluid header-img"/>
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
                        <h3 className="card-title">Startups</h3>
                        <p className="card-text">We are a highly dedicated and specialized team of digital marketers who focus on growing the revenue of Startups. We understand your startup and know how best to market your products and services.</p></div>
                </div>
                <div className="card hvr-grow">
                    <img src="/static/img/svg/marketing1.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Traditional</h3>
                        <p className="card-text">We have a thorough understanding of traditional marketing across serveral cultures and regions. This makes us to have a mastery of the use of digital skills to achieve exponential results.</p>
                    </div>
                </div>
                <div className="card hvr-grow">
                    <img src="/static/img/svg/softdev1.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Data-Driven</h3>
                        <p className="card-text">Our work is data-inspired, and we make the most of metrics in growing your startup revenue.</p>
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
                    Social Media Marketing <br />
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/seo 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Email Marketing
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/analysis 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Social Media Audit
                </p>
            </div>

        </div>
        <div className="row pt-5">
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/Web development 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Display Advertising
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/contentM.svg"  className="img-fluid"/>
                <p className="paragraph-one">
                Social Media Strategy
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/Cross-Platform.svg" className="img-fluid"/>
                <p className="paragraph-one">
                 Advertising Campaigns
                </p>
            </div>

        </div>
    </div>
</section>
<NeedSolution/>
</Layout>;

export default Index;
