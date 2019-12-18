import './Footer.scss'
import Link from 'next/link'
const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <li><Link href="/academy"><a className="footer-link">Hackademy</a></Link></li>
                    <li><Link href="/"><a className="footer-link">Startpod</a></Link></li>
                    <li><Link href="/"><a className="footer-link">ProduX</a></Link></li>
                    <li><Link href="/"><a className="footer-link">About Us</a></Link></li>
                    
                </div>
                <div className="col-sm-7">
                </div>
                <div className="col-sm-3 mt-4">
                    {/* <span className="footer-icons"> <a href=""> <img src="/static/img/png/instagram.png"/> </a> </span> */}
                    <span className="footer-icons"> <a href="https://twitter.com/icodehub" target="blank"> <img src="/static/img/png/twitter.png"/> </a> </span>
                    {/* <span className="footer-icons"> <a href=""> <img src="/static/img/png/whatsapp.png"/> </a> </span> */}
                    <span className="footer-icons"> <a href="https://www.linkedin.com/company/icodehub/" target="blank"> <img src="/static/img/png/linkedin.png"/> </a> </span>
                    
                </div>

            </div>
            <div className="row copyright">
                <div className="col-sm-3 mt-4">
                    <img src="/static/img/svg/footerlogo.svg" className="img-fluid"/> 
                </div>
                <div className="col-sm-5 mt-4">
                <span className="copyright-text">© 2019 iCode Innovation Hub. All rights reserved.</span>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-2 mt-4">
                    <h5 className="copyright-text">Our brands</h5>
                    <a href="https://twitter.com/icodehackademy" target="blank"><img className="img-fluid ml-1 mt-0" src="/static/img/svg/icodeacademy.svg"/></a>
                </div>
            </div>
        </div>
    </footer>
        
  );

  export default Footer;