import AnimRoutes from "./components/AnimRoutes"
import Header from "./components/Header"
import MobileNav from "./components/MobileNav"
import Socials from "./components/Socials"

import { BrowserRouter as Router} from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
 
  return (
    <div className="App">

      <Router>
        <Header/>
        <AnimRoutes/>
        {/* <MobileNav/>
        <Socials/> */}

      </Router>
      
    </div>
  );
}

export default App;
