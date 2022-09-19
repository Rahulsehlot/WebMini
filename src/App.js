import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import login from "./Components/Login";
import HomeSection from "./Components/HomeSection";
import WeDoSection from "./Components/WeDoSection";
import StorySection from "./Components/StorySection";
import MediwheelsMain from "./Components/MediwheelsMain";
import TeamSection from "./Components/teamSection";
import Footer from "./Components/Footer";
import OrderSection from "./Components/OrderSection";
import PartnerSignup from "./Components/PartnerSignup";
import StorySectionN from "./NavCompo/StorySection";
import WeDoSectionN from "./NavCompo/WeDoSection";
import TeamSectionN from "./NavCompo/teamSection";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/Login" component={login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/StorySectionN" component={StorySectionN} />
          <Route path="/WeDoSection" component={WeDoSectionN} />
          <Route path="/TeamSection" component={TeamSectionN} />
          PartnerSignup
          <Route path="/PartnerSignup" component={PartnerSignup} />
          <div>
            <HomeSection />
            <WeDoSection />
            <StorySection />
            {/* <TeamSection /> */}
            <OrderSection />
            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
