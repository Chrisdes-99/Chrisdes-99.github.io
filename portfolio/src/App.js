import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Heading'
import Education from './Components/Education'
import Experience from './Components/Experience';
import ProjectBoard from './Components/Project';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Education></Education>
      <Experience></Experience>
      <ProjectBoard></ProjectBoard>
    </div>
  );
}

export default App;
