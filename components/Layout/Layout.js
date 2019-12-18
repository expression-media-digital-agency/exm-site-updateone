import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

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