import '../styles/Experience.css'
import pin from '../images/globe.png'

export default function Experience(){
    return(
        <div className='experience'>
            <h1>CS Work Experience</h1>
            <div className='experience-grid'>
            <div className='cs-info' style={{textAlign:'start'}}>
                <h2>UCR's Comp Sci. Study Abroad Program</h2>
                
                <p style={{lineHeight:"1.7"}}>
                Created a functioning website named <span id="Hark">Hark</span> in a class group setting 
                while meeting tight deadlines and adjusting to a new environment. 
                Learned the bussiness aspects of pitching a new website idea. 
                Also, learned the fundamentals of web development by gaining experience 
                with the basics the VueJS framework, CSS, HTML and Javascript.</p>
                </div>
                <div className='cs'>
                <h3>Software Developer</h3>
                <h4>[July 2022 - August 2022]</h4>
                <img src={pin} alt='pinpoint' width={40} height={40}></img>
                <h4>Paris, France</h4>
                </div>
            </div>
        </div>
    )
}