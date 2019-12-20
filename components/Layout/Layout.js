import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import 'normalize.css'
// import 'animate.css'
// import 'hover.css'
const Layout = props => (
    <div>
     <NavBar />
        <body>
          {props.children}
        </body>
      <Footer/>
    </div>
  );
  
  export default Layout;