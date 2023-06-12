function Card(props) {

    return (
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

}

export default Card;