import Card from "./Card";
import {Character} from "./CharacterModel";

type GalleryProp = {
    galleryToShow: Character []
}
export default function Gallery(props: GalleryProp) {
    return (
        <div className="gallery">
            {props.galleryToShow.map((card) => {
                return (<Card key={card.id} galleryToShow={card}/>)
            })}
        </div>
    )
}