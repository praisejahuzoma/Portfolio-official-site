import './App.css';
import Navbar from "./Nav"
import HomePage from "./Home"
import About from "./About"
import Skill from "./Skill"
import Qulifications from './Qualification'
import Services from './Service';
import ScrollUp from './Scroll-up';
import Contact from './Contact';
// import Portfolio from './Portfolio';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <About/>
      <Skill/>
      <Qulifications/>
      <Services/>
      <ScrollUp/>
      <Contact/>
      {/* <Portfolio/> */}
      <Footer/>
    </div>
  )
}

export default App;
