export default function Project({name,description,image,alt}){
    return(
        <>
        <div className="project">
        <img src={image} alt={alt} width={400} height={200} style={{borderRadius:"5px"}}></img>
        <h2>{name}</h2>
        <p>{description}</p>
        </div>
        </>
    );
}