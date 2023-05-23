import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Heading'
import Education from './Components/Education'
import Experience from './Components/Experience';
import ProjectBoard from './Components/Project';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Education></Education>
      <Experience></Experience>
      <ProjectBoard></ProjectBoard>
      <Skills></Skills>
    </div>
  );
}

export default App;
