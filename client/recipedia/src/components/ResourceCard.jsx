const ResourceCard = (props) => {

    return (
        <div className='box-resource'>
            <div className="resource-card" >
                <div className="recipe-card-name">
                    <h2>{props.name}</h2>
                </div>
                <div>
                    <h4>{props.definition}</h4>
                </div>
            </div>
        </div>
    )

}

export default ResourceCard
