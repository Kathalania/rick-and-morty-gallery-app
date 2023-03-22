import {Character} from "./CharacterModel";

type CardType = {
    galleryToShow: Character
}
export default function Card(props: CardType) {
    return (
        <div className="card">
            <h2>{props.galleryToShow.name}</h2>
            <img src={props.galleryToShow.image} alt={"Image of character " + props.galleryToShow.name }/>
            <p>{props.galleryToShow.origin.name}</p>
        </div>
    )
}