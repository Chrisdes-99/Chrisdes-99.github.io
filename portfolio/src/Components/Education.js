import '../styles/Education.css'
import pin from '../images/pinpoint.png'

export default function Education(){
    return(
        <div className='education'>
            <h1>My Education Experience</h1>
            <div className='education-grid'>
                <div className='edu-1'>
                    <h2><u>University of California, Riverside</u></h2>
                    <h3>Bachelor of Science, Computer Science</h3>
                    <p>[Sept. 2020 - Dec. 2022]</p>
                </div>
                <div className='edu'>
                    <img src={pin} alt='pinpoint' width={40} height={40}></img>
                    <p>Riverside, California</p>
                    {/*<h2><u>Mt. San Jacinto Community College</u></h2>
                    <h3>Associate of Science, Computer Science</h3>
                    <h4>[Aug. 2017 - May. 2020]</h4>
                    <img src={pin} alt='pinpoint' width={60} height={60}></img>
                    <h4>San Jacinto, California</h4>*/}
                </div>

                <div className='edu-1'>
                    <h2><u>Mt. San Jacinto Community College</u></h2>
                    <h3>Associate of Science, Computer Science</h3>
                    <p>[August. 2017 - May. 2020]</p>
                </div>
                <div className='edu'>
                    <img src={pin} alt='pinpoint' width={40} height={40}></img>
                    <p>San Jacinto, California</p>
                </div>
            </div>
            <p><span>* Associate's and Bachelor's Degrees Recieved</span></p>
            <p><span>* Graduation Date: June 20th, 2023</span></p>
        </div>
    )
}