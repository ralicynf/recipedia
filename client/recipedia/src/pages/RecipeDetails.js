import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RecipeDetails = (props) => {
    let { id } = useParams()

    const [recipeDetails, setRecipeDetails] = useState()

    const getRecipeDetails = async () => {
        const response = await axios.get(`http://localhost:3001/recipedia/recipes/${id}`)
        console.log(response)
        setRecipeDetails(response.data.recipe)
    }
    
    useEffect(() => {
        getRecipeDetails()
    }, [id])



    return (
        <div>
            {recipeDetails ? (
            <div className="recipe-details">
                <div>
                    <h1>{recipeDetails.name}</h1>
                </div>
                <section className='image-box'>
                    <img src={recipeDetails.image} alt={recipeDetails.name} />
                </section>
                <section className='time'>
                    <h4>Prep Time : {recipeDetails.prepTime}</h4>
                    <h4>Cook Time : {recipeDetails.cookTime}</h4>
                </section>
                <section className='ingredients'>
                    <p>Ingredients: {recipeDetails.ingredients}</p>
                </section>
                <section className='instructions'>
                    <p>Instructions: {recipeDetails.instructions}</p>
                </section>
                <div>
                    <h3>Submitted By : {recipeDetails.submittedBy}</h3>
                </div>
            </div>
            ) : <h1>Not Found.</h1>}            
        </div>
    )
}

export default RecipeDetails
