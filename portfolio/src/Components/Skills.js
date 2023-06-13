import Skill from './Skill'
//import webdev from '../images/webdev.png'
import '../styles/Skills.css'

export default function Skills(){
    return(
        <>
        <div className = 'Skills'>
        <h1>Skills</h1>
        <br></br>
        <h2>Front End</h2>
        <div className="skill-grid">
            <Skill name={'HTML & CSS'} description={'Proficient'}></Skill>
            <Skill name={'Web Development Lifecyle'} description={'Proficient'} ></Skill>
            <Skill name={'Javascript'} description={'Competent'}></Skill>
            <Skill name={'React'} description={'Competent'}></Skill>
            <Skill name={'Responsive Design'} description={'Competent'}></Skill>
            <Skill name={'VueJS'} description={'Familiar'}></Skill>
        </div>
        <h2>Back End</h2>
        <div className="skill-grid">
            <Skill name={'C++'} description={'Proficient'}></Skill>
            <Skill name={'Software Lifecyle'} description={'Proficient'} ></Skill>
            <Skill name={'Java , C , Python , SQL'} description={'Competent'}></Skill>
        </div>
        <h2>Comp Sci.</h2>
        <div className="skill-grid">
            <Skill name={'Agile & Scrum (Team Developement)'} description={'Proficient'}></Skill>
            <Skill name={'Git & GitHub'} description={'Proficient'}></Skill>
            <Skill name={'Windows OS & Mac OS'} description={'Proficient'}></Skill>
            <Skill name={'Software Testing'} description={'Familiar'}></Skill>
        </div>
        </div>
        </>
    )

}