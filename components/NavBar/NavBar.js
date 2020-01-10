
import './NavBar.scss'
import Link from 'next/link'

const NavBar = () => (
    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand" href="#"><img className="logo img-fluid" src="/static/img/svg/logo1.svg"/></a>
      </Link>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fas fa-bars"></span>
      </button> */}
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span> </span>
              <span> </span>
              <span> </span>
            </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About Us</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
</nav>
  );

  export default NavBar;