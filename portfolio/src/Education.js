import '../src/styles/Education.css'
import pin from '../src/pinpoint.png'

export default function Education(){
    return(
        <div className='education'>
            <h1>My Education Experience</h1>
            <div className='education-grid'>
                <div className='edu'>
                    <h2><u>University of California, Riverside</u></h2>
                    <h3>Bachelor of Science, Computer Science</h3>
                    <h4>[Sept. 2020 - Dec. 2022]</h4>
                    <img src={pin} alt='pinpoint' width={60} height={60}></img>
                    <h4>Riverside, California</h4>
        
                </div>
                <div className='edu'>
                    <h2><u>Mt. San Jacinto Community College</u></h2>
                    <h3>Associate of Science, Computer Science</h3>
                    <h4>[Aug. 2017 - May. 2020]</h4>
                    <img src={pin} alt='pinpoint' width={60} height={60}></img>
                    <h4>San Jacinto, California</h4>
                </div>
            </div>
            <p>* Associate's and Bachelor's Degrees Recieved</p>
            <br></br>
            <p>* Graduation Date: June 20th</p>
        </div>
    )
}