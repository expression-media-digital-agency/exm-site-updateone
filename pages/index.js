import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './index.scss'
import Link from "next/link";

const Index = () => <Layout>
<Head>
    <title>iCode Hub | Home</title>
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
        <div className="col-sm-5 pb-5">
            <p className="header-text">
                We take you on the shortest journey to learn what matters.
            </p>

            <Link href="/academy">
                <a className="header-btn">
                    Learn more
                </a>
            </Link>
        </div>
        <div className="col-sm-3"></div>
        <div className="col-sm-4">
            <img src="/static/img/svg/goal.svg" alt="" className="img-fluid"/>
            <img src=""/>
        </div>
       </div>
    </div>    
</header>
<section className="section-offer">
    <div className="container">
        <div className="row">
            <div className="col-sm-5">
                <h1 className="heading-one">
                    What we offer
                </h1>
                <p className="paragraph-one">
                We design our courses to focus on what you need, it won’t take you months before you start building, just weeks.
                </p>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-4">
                <li><Link href="/academy"><a className="section-link"><img className="img-fluid" src="/static/img/png/frontend.png"/>Front-end Development</a></Link></li>
                <li><Link href="/academy"><a className="section-link"><img className="img-fluid" src="/static/img/png/backend.png"/>Back-end Development</a></Link></li>
                <li><Link href="/academy"><a className="section-link"><img className="img-fluid" src="/static/img/png/graphic.png"/>Visual/Graphic Design</a></Link></li>
                <li><Link href="/academy"><a className="section-link"><img className="img-fluid" src="/static/img/png/prod.png"/>Product Design</a></Link></li>
                    
            </div>


        </div>
    </div>
</section>
<section className="section-train">
    <div className="container">
                <img src=""/>
        <div className="row">
            <div className="col-sm-12">
                <h2 className="heading-two text-center">
                    Why you should train with us?
                </h2>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/class.svg" className="img-fluid"/>
                <p className="paragraph-two">
                Pick from one of our courses interesting to you
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/teamwork.svg" className="img-fluid"/>
                <p className="paragraph-two">
                Make a team from among your colleagues
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/start-up.svg" className="img-fluid"/>
                <p className="paragraph-two">
                Work on your idea to form a startup or join us
                </p>
            </div>


        </div>
    </div>
</section>
<section className="section-build">
    <div className="container">
        <div className="row">
            
            <div className="col-sm-6 pb-5">
                <h3 className="heading-three">
                We train you to build something great
                </h3>
                <p className="paragraph-three">
                iCode Academy Specializes in series of courses that help you master a skill.
                You can review our courses and choose the one you'd like to start with.
                The training is 100% practical based.
                </p>
            </div>
            <div className="col-sm-6 text-center">
                <img className="img-fluid" src="/static/img/svg/build.svg"/>
            </div>
        </div>
    </div>
</section>
<section className="section-decision">
    <div className="container">
        <div className="row">
            
            <div className="col-sm-6 pb-5">
                <h3 className="heading-three">
                Make all the decision
                </h3>
                <p className="paragraph-three">
                We give all our trainees a month timeframe to decide whether they want to build their own start up OR
                they intend working with us.
                </p>
            </div>
            <div className="col-sm-6 text-center">
                <img className="img-fluid" src="/static/img/svg/decision.svg"/>
            </div>
        </div>
    </div>
</section>
<section className="section-contact">
    <div className="container">
        <div className="row">
            
            <div className="col-sm-6 pb-5">
                <h3 className="heading-three">
                Have any questions?
                </h3>
                
                <p className="paragraph-three">
                You can get across to us for more information.
                </p>

                <Link href="">
                <a href="mailto:academy@icodeinnovationhub.com" target="blank" className="contact-btn">
                   contact us
                </a>
                </Link>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <img className="img-fluid" src="/static/img/svg/contact-us.svg"/>
            </div>
        </div>
    </div>
</section>
</Layout>;

export default Index;