import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "../src/pages/Landingscreen/landingscreen";
import Bannerscreen from "./pages/bannerscreen/bannerscreen";
import Footer from "./components/footer/footer";
import AboutIPro from "./pages/About/About";
import Carinformation from "./pages/Aboutcar-information/car-information";
import OurServices from "./pages/our-service/our-service";
import Career from "./pages/Career/Career";
import ContactUs from "./pages/Support/support"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-screen" element={<LandingScreen />} />
        <Route path="/" element={<Bannerscreen />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Aboutus" element={<AboutIPro />} />
        <Route path="/4-wheeler" element={<Carinformation />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
