import "./Card.css"


function Card(props) {
    return(
    <div className="Card">
        <h2>{props.title}</h2>
        <p>{props.description}Descripcion general</p>
    </div>

    );
}
export default Card;