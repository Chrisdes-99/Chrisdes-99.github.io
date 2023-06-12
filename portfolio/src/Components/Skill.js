export default function Skill({name,description,color}){
    return(
        <>
        <div className="skill">
        <h3>{name}</h3>
        <p style={{color:{color}}}>{description}</p>
        </div>
        </>
        /*  <img src={image} alt={alt} width={50} height={50} style={{borderRadius:"5px"}}></img>*/
    );
}