import './NeedSolution.scss'
import Link from 'next/link'
const NeedSolution = () => (
    <section className="section-solution">
    <div className="container">
        <div className="row">
            
            {/* <div className="col-sm-4 text-center">
                <img src="/static/img/svg/anita.svg" alt="anita picture" className="img-fluid"/>
            </div> */}
            <div className="col-sm-8">
                <h3 className="heading-three">Hello there! </h3> {/* Hi! I’m Anita.</h3> */}
                <h1  className="heading-one">Need to Create a Solution?</h1>
                <h2 className="heading-two">Let's discuss your next project</h2>
                <p className="paragraph-one mb-5">Our team of creatives are ready to help, just a click away to get started.</p>
                <Link href="/contact">
                    <a className="solution-btn hvr-grow-shadow">
                        Hire Us!
                    </a>
                </Link>
            </div>
        </div>
    </div>
</section>
  );

  export default NeedSolution;