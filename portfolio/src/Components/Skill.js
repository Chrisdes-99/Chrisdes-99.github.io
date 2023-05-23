export default function Skill({name,description,image,alt}){
    return(
        <>
        <div className="skill">
        <img src={image} alt={alt} width={50} height={50} style={{borderRadius:"5px"}}></img>
        <h2>{name}</h2>
        <p>{description}</p>
        </div>
        </>
    );
}