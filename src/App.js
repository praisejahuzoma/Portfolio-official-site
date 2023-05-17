import './App.css';
import Navbar from "./Nav"
import HomePage from "./Home"
import About from "./About"
import Skill from "./Skill"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <About/>
      <Skill/>
    </div>
  )
}

export default App;
