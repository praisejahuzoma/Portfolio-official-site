import './App.css';
import Navbar from "./Nav"
import HomePage from "./Home"
import About from "./About"
import Skill from "./Skill"
import Qulifications from './Qualification'
import Services from './Service';
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
      {/* <Portfolio/> */}
    </div>
  )
}

export default App;
