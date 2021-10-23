import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import login from './Components/Login'
import HomeSection from './Components/HomeSection'
import WeDoSection from './Components/WeDoSection'
import StorySection from './Components/StorySection'
import MediwheelsMain from './Components/MediwheelsMain'
import TeamSection from './Components/teamSection'
import Footer from './Components/Footer'
import OrderSection from './Components/OrderSection'
import PartnerSignup from './Components/PartnerSignup'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Login" component={login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/StorySection" component={StorySection} />
          <Route path="/HomeSection" component={HomeSection} />
          <Route path="/WeDoSection" component={WeDoSection} />
          <Route path="/TeamSection" component={TeamSection} />
          <Route path="/Footer" component={Footer} />
          <Route path="/OrderSection" component={OrderSection} />
          PartnerSignup
          <Route path="/PartnerSignup" component={PartnerSignup} />
          <div>
            <Navbar />
            <HomeSection />
            <WeDoSection />
            <StorySection />
            <TeamSection />
            <OrderSection />
            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  )
}

export default App
