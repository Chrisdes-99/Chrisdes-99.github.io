import '../styles/Experience.css'
import pin from '../images/pinpoint.png'

export default function Experience(){
    return(
        <div className='experience'>
            <h1>CS Work Experience</h1>
            <div className='experience-grid'>
            <div className='cs-info' style={{textAlign:'start'}}>
                <h2>UCR's Computer Science Study Abroad Program</h2>
                <hr></hr>
                <p style={{lineHeight:"1.7"}}>
                Created a functioning website named <span style={{color:'red'}}>Hark</span> in a class group setting 
                while meeting tight deadlines and adjusting to a new environment. 
                Learned the bussiness aspects of pitching a new website idea. 
                Also, learned the fundamentals of web development by gaining experience 
                with the basics the VueJS framework, CSS, HTML and Javascript.</p>
                </div>
                <div className='cs'>
                <h3>Software Developer</h3>
                <p>[July 2022 - August 2022]</p>
                <img src={pin} alt='pinpoint' width={50} height={50}></img>
                <p>Paris, France</p>
                </div>
            </div>
        </div>
    )
}