import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './about.scss'
import Link from "next/link";

const Academy = () => <Layout>
<Head>
    <title>iCode Hub | About Us</title>
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
        
        <div className="col-sm-4">
            <img src="/static/img/svg/vision.svg" alt="our-vision" className="img-fluid"/>
        </div>
        <div className="col-sm-2"></div>

        <div className="col-sm-6 pb-5">
            <h1 className="heading-one">
            Our Vision
            </h1>

           <p className="paragraph-one">
           To build a technological community where individuals are developed to be prefessionals, where teams are developed to collaborate to the end that real world problems are solved by leveraging the use of technology
           </p>
        </div>
       </div>
    </div>    
</header>
<section className="section-mission">
    <div className="container">
        <div className="row">
           

            <div className="col-sm-6">
            <h1 className="heading-one">
            Our Mission
            </h1>

           <p className="paragraph-one">
           iCode innovation hub exists to develop individuals and teams through learning and collaboration, which will result in professionalism and solving real world problems through technology
           </p>
            </div>
            <div className="col-sm-2 pb-5"></div>

            <div className="col-sm-4">
            <img src="/static/img/svg/mission.svg" alt="our-mission" className="img-fluid"/>
            
            </div>
        </div>
    </div>
</section>
<section className="section-values">
    <div className="container">
       <div className="row">
        
        <div className="col-sm-12 text-center">
        <h1 className="heading-one ">
            Core Values
            </h1>

            <img src="/static/img/svg/corevalues.svg" alt="core-values" className="img-fluid"/>
        </div>
            
        
       </div>
    </div>    
</section>

<section className="section-offers">
    <div className="container">
       <div className="row">
        
        <div className="col-sm-12">
        <h1 className="heading-one text-center">
            What We Offer
            </h1>

        </div>
            
        
       </div>
       <div className="row">
        <div className="col-sm-12">
        <h2 className="heading-two text-center">Trainees</h2>

        </div>
           <div className="col-sm-4 text-center mb-5">
           <img src="/static/img/svg/learning.svg" className="img-fluid"></img>
               <p className="paragraph-one">
               Access to learning platform & materials
               </p>
           </div>
           <div className="col-sm-4 text-center mb-5">
           <img src="/static/img/svg/community.svg" className="img-fluid"></img>

               <p className="paragraph-one">
               Access to vibrant & innovative team
               </p>
           </div>
           <div className="col-sm-4 text-center mb-5">
           <img src="/static/img/svg/opportunites.svg" className="img-fluid"></img>

               <p className="paragraph-one">
               Access to technological opportunities of various forms
               </p>
           </div>
           <div className="col-sm-4 text-center mb-5">
           <img src="/static/img/svg/mentorship.svg" className="img-fluid"></img>

               <p className="paragraph-one">
               Access to mentorship
               </p>
           </div>
           <div className="col-sm-4 text-center mb-5">
           <img src="/static/img/svg/practical.svg" className="img-fluid"></img>

               <p className="paragraph-one">
               Practical & Handson experience which helps to foster professionalism
               </p>
           </div>
       </div>
    </div>    
</section>


</Layout>;

export default Academy;