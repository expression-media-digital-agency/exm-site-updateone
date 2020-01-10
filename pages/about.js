import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './about.scss'
import Footer from "../components/Footer/Footer";
import NeedSolutionOne from "../components/NeedSolutionOne/NeedSolutionOne";


const About = () => <Layout>
<Head>
    <title>EXM | About Us</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
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
        
        <div className="col-sm-8">
            <h3 className="heading-three animated fadeIn delay-1s">
                Meet Ben & Anita
            </h3>
            <h1 className="heading-one animated fadeIn delay-2s">
                Get to know us
            </h1>
           <p className="paragraph-one animated fadeIn delay-3s">
                Your success becomes our story
           </p>
        </div>

        <div className="col-sm-4 header-img animated fadeIn delay-2s">
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
                    Digital Solutions respond to the diverse business needs with cutting-edge technologies that allow us to delve into the digital transformation of our customers, always focusing on the transformation of the business processes and specific needs.<br/><br/>
                    Expression Media works to explore all the resources and digital trends that the market offers to develop your business through different IT solutions both cloud and on-premise: digitization of processes, web or mobile applications, collaborative environments and content management, among others.
                </p>
            </div>
            <div className="col-sm-1"></div>

        </div>

        <div className="row contents">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <p className="paragraph-one">
                These digital solutions allow companies and businesses to continue advancing on the path to digital transformation hence giving voice and visibility to their business.<br/><br/>
                Our dynamic team is composed of different complementary profiles, strategists, developers, managers, creatives, all at the service of your company and we make a point of establishing a real relationship of trust with our customers.
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
                Are you looking for a dynamic team that can transform your business into a digital solution that will make your audience and customers patronise the services you render? Look no further, for Expression Media has got you covered.<br/><br/>
                At Expression Media, we utilise technologies to create, develop and integrate effective tools to serve your business. Our team puts its expertise at your disposal and offers a quality service to guide you, accompany you and to realize your business projects on all digital media.
                </p>
            </div>
            <div className="col-sm-1"></div>

        </div>
    </div>
</section>
<NeedSolutionOne/>

</Layout>;

export default About;