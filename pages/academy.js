import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './academy.scss'
import Link from "next/link";

const Academy = () => <Layout>
<Head>
    <title>iCode Hub | Academy</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:400,800&display=swap" rel="stylesheet"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
</Head>
<header className="acad-header">
    <div className="container">
       <div className="row">
        <div className="col-sm-5 pb-5">
            <h1 className="heading-one">
            Front-end Development
            </h1>

           <p className="paragraph-one">
           It is also called client-side development <br/> <br/>
            It is the practice of producing HTML, CSS, and JavaScript for a website or Web Application so that a user can see and interact with them directly.
           </p>

           <p> <span className="stack-text"><b>STACKS: </b>   HTML, CSS, JavaScript, React</span></p>
        </div>
        <div className="col-sm-3"></div>
        <div className="col-sm-4">
            <img src="/static/img/svg/frontendstacks.svg" alt="" className="img-fluid"/>
        </div>
       </div>
    </div>    
</header>
<section className="section-backend">
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
            <img src="/static/img/svg/backendstacks.svg" alt="" className="img-fluid"/>
            
            </div>
            <div className="col-sm-3 pb-5"></div>

            <div className="col-sm-5">
            <h1 className="heading-one">
            Back-end Development
            </h1>

           <p className="paragraph-one">
           As a back-end developer, you will create the logic to make applications function properly. <br/> <br/>

You will write codes that communicate the information between the database and the browser.
           </p>

           <p> <span className="stack-text"><b>STACKS: </b>   NodeJS, ExpressJS, MongoDB, PostgreSQL</span></p>

            </div>
        </div>
    </div>
</section>
<section className="section-visual">
    <div className="container">
       <div className="row">
        <div className="col-sm-5 pb-5">
            <h1 className="heading-one">
            Visual/Graphic Design
            </h1>

           <p className="paragraph-one">
           As a Visual Designer you are responsible for management and execution of visual product assets. <br/> <br/>

Also you as a Visual Designer have to use all your creative juice in coming up with the most attractive and appealing logos, icons, and typography.
           </p>

           <p> <span className="stack-text"><b>STACKS: </b>  Adobe Creative Suite, Typography, Color
Information Architecture, Branding</span></p>
        </div>
        <div className="col-sm-3"></div>
        <div className="col-sm-4">
            <img src="/static/img/svg/visual-design.svg" alt="" className="img-fluid"/>
        </div>
       </div>
    </div>    
</section>

<section className="section-product">
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
            <img src="/static/img/svg/product-design.svg" alt="" className="img-fluid"/>
            
            </div>
            <div className="col-sm-3 pb-5"></div>

            <div className="col-sm-5">
            <h1 className="heading-one">
            Product Design
            </h1>

           <p className="paragraph-one">
           As a product designer, you’ll be responsible for designing delightful user experiences, collaborating with cross-functional teams, and creating user interfaces that solve users pain points. <br/> <br/>

you’ll collaborate with teams to craft the perfect product, and leverage interaction, UI, and visual design to do the best work.
           </p>

           <p> <span className="stack-text"><b>STACKS: </b>   Wireframing, Prototyping, Interaction, Usability, User Research, Information Architecture, Testing, UX Writing</span></p>

            </div>
        </div>
    </div>
</section>
<section className="section-enroll">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 ">
            <h1 className="pb-5 heading-one">
            We have one of the best <br/> hands to train you...
            </h1>
                <a href="https://bit.ly/icodeimprovelearning" target="blank">Enroll Now</a>
            </div>
        </div>
    </div>
</section>
</Layout>;

export default Academy;