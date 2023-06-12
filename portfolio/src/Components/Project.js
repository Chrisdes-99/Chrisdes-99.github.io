import '../styles/Project.css'
import Project from './SingleProject'

import rps from '../images/RPS.png'
import weather from '../images/WeatherApp.png'
import todo from '../images/TODO.png'
import landing from '../images/LandingPage.png'

export default function ProjectBoard(){

    function handleClick(){
        const moreProjects = document.getElementById("moreProjects");
        const button = document.getElementById("seeMore");

    if(moreProjects.style.display === 'none'){
        moreProjects.style.display = 'grid';
        button.innerText = "See Less";
    }
    else{
        moreProjects.style.display = "none";
        button.innerText = "See More"
    }
    }

    return(
        <div className='Projects'>
            <h1>Projects</h1>
            <div className="project-grid">
                <Project progress ={'Completed'} name={"Rock, Paper, Scissors"} alt={"RPS"} image={rps} site={'https://chrisdes-99.github.io/TOP-RPS/'}></Project>
                <Project progress ={'Completed'} name={"Weather Application"} alt={"RPS"} image={weather} site={'https://chrisdes-99.github.io/WeatherApp/'}></Project>
                </div>
                <br></br>
                <span id="moreProjects" style={{display:'none'}}>
                <Project  progress ={'Completed'}  image={todo}  name={"ToDo Board"} alt={"TODO List"} site={'https://chrisdes-99.github.io/TODO-List-Revised/'}></Project>
                <Project progress ={'In Progress'} name={"Landing Page"} image={landing} alt={"Landing Page"} site={'https://chrisdes-99.github.io/TOP-LandingPage/'}></Project>
                </span>
            <button id="seeMore" onClick={handleClick}> See More </button>
        </div>
    )
}

