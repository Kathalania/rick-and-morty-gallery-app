type GalleryProp = {galleryToShow: {name: string, image: string, origin: {name: string, url: string}}[]}
export default function Gallery(props: GalleryProp){
    return (
        <div className= "gallery">
            {props.galleryToShow.map((card) => {
            return (<div className= "card">
                <h2>{card.name}</h2>
                <img src = {card.image}/>
                <p>{card.origin.name}</p>
                </div>
            )})}
        </div>
    )
}