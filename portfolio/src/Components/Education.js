import '../styles/Education.css'
import pin from '../images/point.png'

export default function Education(){
    return(
        <div className='education'>
            <h1 className="h1">My Education Experience</h1>
            <div className='education-grid'>
                <div className='edu-1'>
                    <h2>Bachelor of Science, Computer Science</h2>
                    <h3>University of California, Riverside</h3>
                    <p>[Sept. 2020 - Dec. 2022]</p>
                    <p>* Degree Recieved</p>
                </div>
                <div className='edu'>
                    <img src={pin} alt='pinpoint' width={40} height={40}></img>
                    <p>Riverside, California</p>
                </div>

                <div className='edu-1'>
                    <h2>Associate of Science, Computer Science</h2>
                    <h3>Mt. San Jacinto Community College</h3>
                    <p>[August. 2017 - May. 2020]</p>
                    <p>* Degree Recieved</p>
                </div>
                <div className='edu'>
                    <img src={pin} alt='pinpoint' width={40} height={40}></img>
                    <p>San Jacinto, California</p>
                </div>
                <div className='edu-1'>
                    <h2>Associate of Science, Mathematics</h2>
                    <h3>Mt. San Jacinto Community College</h3>
                    <p>[August. 2017 - May. 2020]</p>
                    <p>* Degree Recieved</p>
                </div>
                <div className='edu'>
                    <img src={pin} alt='pinpoint' width={40} height={40}></img>
                    <p>San Jacinto, California</p>
                </div>
                
            </div>
            <h3><span>Graduation Date: June 20th, 2023</span></h3>
        </div>
    )
}