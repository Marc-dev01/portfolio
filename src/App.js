import "./App.css";
import "./assets/vendors/themify-icons/css/themify-icons.css";
import "./assets/css/johndoe.css";

// ///////
/* import "./assets/vendors/jquery/jquery-3.4.1.js"; */
/* import "./assets/vendors/bootstrap/bootstrap.bundle.js"; */
/* import "./assets/vendors/isotope/isotope.pkgd.js"; */
/* import "./assets/js/johndoe.js"; */
import About from "./components/about/About";
import BandeOne from "./components/bande/BandeOne";
import BandeTwo from "./components/bande/BandeTwo";
import Contact from "./components/contact/Contact";
import CvGroup from "./components/cv/CvGroup";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavGroup from "./components/navbar/navGroup";
import News from "./components/new/News";
import Packs from "./components/packs/Packs";

import MyService from "./components/service/MyService";
import AddPortfolio from "./components/add portfolio/AddPortfolio";

function App() {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
      <Header />
      <NavGroup />
      <About />
      <CvGroup />
      <BandeOne />
      <MyService />
      <Packs />
      <BandeTwo />
      <AddPortfolio />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
