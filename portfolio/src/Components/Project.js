import '../styles/Project.css'
import Project from './SingleProject'

import rps from '../images/RPS.png'
import weather from '../images/WeatherApp.png'
import todo from '../images/TODO.png'
import landing from '../images/LandingPage.png'

export default function ProjectBoard(){
    return(
        <div className='Projects'>
            <h1>Projects</h1>
            <div className="project-grid">
                <Project name={"Rock, Paper, Scissors"} description={"A simple interface and game functionality of the Rock, Paper, Scissors game. It displays the round results, scores, and winner of the entire game."} alt={"RPS"} image={rps}></Project>
                <Project name={"Weather Application"} description={"An single page application that allows users to enter a location by city name to get the location's current weather. Uses the API from WeatherAPI.com to get up-to-date weather info."} alt={"RPS"} image={weather}></Project>
                <Project name={"ToDo Board"} description={"A simple application that posts tasks entered by users. The tasks' priority level, due date, and optional notes are displayed."} image={todo} alt={"TODO List"}></Project>
                <Project name={"Landing Page"} description={"A landing page of a mock website idea. Also includes mock login and sign up pages."} image={landing} alt={"Landing Page"}></Project>
            </div>
        </div>
    )
}

