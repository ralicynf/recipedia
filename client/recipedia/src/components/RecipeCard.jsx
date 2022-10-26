

const RecipeCard = (props) => {

    return (
        <div className="recipe-card-image" onClick={props.onClick}>
            <div className="recipe-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="recipe-card-name">
                <h2>{props.name}</h2>
            </div>
        </div>
    )

}

export default RecipeCard