const RecipeCard = (props) => {

    return (
        <div className='box'>
            <div className="recipe-card" onClick={ () => {props.onClick(props.id)}}>
                <div className="recipe-image">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="recipe-card-name">
                    <h2>{props.name}</h2>
                </div>
            </div>
        </div>
    )

}

export default RecipeCard

//want to have recipe card go to the recipe details on click