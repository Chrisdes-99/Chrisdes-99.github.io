import '../styles/Navbar.css'
import pic from '../images/CD(2).png'


export default function Navbar(){
    return(
        <div className='navBar'>
            <div className='image'>
                <img src={pic} alt='CD' width={60} height={60} id='CD'></img>
            </div>
            <div className="navList">
                <a href="https://www.w3schools.com/REACT/react_components.asp">Education</a>
                <a href="https://www.w3schools.com/REACT/react_components.asp">Experience</a>
                <a href="https://www.w3schools.com/REACT/react_components.asp">Projects</a>
                <a href="https://www.w3schools.com/REACT/react_components.asp">Skills</a>
            </div>
            </div>
    )
}