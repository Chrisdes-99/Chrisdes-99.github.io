import '../src/styles/Heading.css'
import pic from '../src/Headshot.png'

export default function Heading(){
    return(
        <div className="heading-grid">
            <div className="me">
                <h1>Hello, I'm Chris</h1>
                <p>I'm a recent Computer Science from the 
                    University of California, Riverside. I love coming up 
                    with new ideas and translating them into software.</p>
                <p>During my studies, I found a passion for web development. 
                    I've turned my passion into many projects which can be found on these page!
                    Feel free to contact me for any inquries.</p>
                <div className='buttons'>
                    <button>Portfolio</button>
                    <button id='contact'>Contact</button>
                </div>
            </div>
            <div className="headshot">
                <img src={pic} alt='headshot' width={270} height={270}></img>
            </div>
        </div>
    )
}