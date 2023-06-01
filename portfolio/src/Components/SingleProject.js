export default function Project({name,description,image,alt,site}){
    return(
        <>
        <div className="project">
        <img src={image} alt={alt} width={400} height={200} style={{borderRadius:"5px"}}></img>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={site} target="_blank" rel="noopener noreferrer" className="site">{site}</a>
        </div>
        </>
    );
}