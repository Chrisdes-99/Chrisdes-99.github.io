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
                <Project name={"Rock, Paper, Scissors"} description={"A simple interface and game functionality of the Rock, Paper, Scissors game. It displays the round results, scores, and winner of the entire game throughout the game."} alt={"RPS"} image={rps} site={'https://chrisdes-99.github.io/TOP-RPS/'}></Project>
                <Project name={"Weather Application"} description={"An single page application that allows users to enter a location by city name to get the location's current weather. Uses the API from WeatherAPI.com to get up-to-date weather info."} alt={"RPS"} image={weather} site={'https://chrisdes-99.github.io/WeatherApp/'}></Project>
                </div>
                
                <span id="moreProjects" style={{display:'none'}}>
                <Project name={"ToDo Board"} description={"A simple application that posts tasks entered by users. The tasks' priority level, due date, and optional notes are displayed."} image={todo} alt={"TODO List"} site={'https://chrisdes-99.github.io/TODO-List-Revised/'}></Project>
                <Project name={"Landing Page"} description={"A landing page of a mock website idea with design from existing mockup. Also includes mock login and sign up pages."} image={landing} alt={"Landing Page"}></Project>
                </span>
            <button id="seeMore" onClick={handleClick}> See More </button>
        </div>
    )
}

/*const seeMore = document.getElementById("seeMore");

seeMore.addEventListener('click', (e)=>{
    e.preventDefault();
    //showProjects();
})

function showProjects(){
    const moreProjects = document.getElementById("moreProjects");

    if(moreProjects.style.display === 'none'){
        moreProjects.style.display = 'grid';
    }
    else{
        moreProjects.style.display = "none";
    }
}*/
