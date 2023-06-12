import Skill from './Skill'
//import webdev from '../images/webdev.png'
import '../styles/Skills.css'

export default function Skills(){
    return(
        <>
        <div className = 'Skills'>
        <h1>Skills</h1>
        <div className="skill-grid">
            <Skill name={'HTML & CSS'} description={'Proficient'}></Skill>
            <Skill name={'Javascript'} description={'Competent'}></Skill>
            <Skill name={'React'} description={'Competent'}></Skill>
            <Skill name={'VueJS'} description={'Familiar'}></Skill>
            <Skill name={'Responsive Design'} description={'Competent'}></Skill>
            <Skill name={'Git & GitHub'} description={'Proficient'}></Skill>
            <Skill name={'C++'} description={'Proficient'}></Skill>
            <Skill name={'Java,C,Python,SQL'} description={'Competent'}></Skill>
            <Skill name={'Agile & Scrum (Team Developement)'} description={'Proficient'}></Skill>
            <Skill name={'Software Testing'} description={'Familiar'}></Skill>
            <Skill name={'Software and Web Development Lifecyle'} description={'Proficient'}></Skill>
            <Skill name={'Winows OS & MacOS'} description={'Proficient'}></Skill>
        </div>
        </div>
        </>
    )

}