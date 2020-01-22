import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import 'normalize.css'
import 'animate.css'
import 'hover.css'
import './layout.scss'
const Layout = ({children}) => (
    <div>
     <NavBar />
        <body>
          {children}
        </body>
      <Footer/>
    </div>
  );
  
  export default Layout;