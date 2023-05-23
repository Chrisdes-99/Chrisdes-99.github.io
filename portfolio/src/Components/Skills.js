import Skill from './Skill'
import webdev from '../images/webdev.png'
import '../styles/Skills.css'

export default function Skills(){
    return(
        <>
        <h1>Skills</h1>
        <div className="skill-grid">
            <Skill name={'Web Development'} description={'Familiar and/or experience in building web applications using: HTML, CSS, React, Vue, Javascript and Responsive Design'} image={webdev} ></Skill>
        </div>
        </>
    )

}