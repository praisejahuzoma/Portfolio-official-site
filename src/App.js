import './App.css';
import Navbar from "./Nav"
import HomePage from "./Home"
import About from "./About"
import Skill from "./Skill"
import Qulifications from './Qualification'
import Services from './Service';
import ScrollUp from './Scroll-up';
// import Portfolio from './Portfolio';
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
      {/* <Portfolio/> */}
    </div>
  )
}

export default App;
