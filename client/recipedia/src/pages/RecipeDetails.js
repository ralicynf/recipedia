import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const RecipeDetails = (props) => {
    let { id } = useParams()
    let navigate = useNavigate()

    const [recipeDetails, setRecipeDetails] = useState()

    const getRecipeDetails = async () => {
        const response = await axios.get(`http://localhost:3001/recipedia/recipes/${id}`)
        console.log(response)
        setRecipeDetails(response.data.recipe)
    }
    
    useEffect(() => {
        getRecipeDetails()
    }, [id])

    const goHome = () => {
        navigate('/')
    }

    const editRecipe = () => {
        navigate(`/recipes/${id}/edit`)
    }
 
    const deleteRecipe = async () => {
        const deleted = await axios.delete(`http://localhost:3001/recipedia/recipes/${id}`)
        console.log(deleted)
        goHome()
    }

 
    return (
        <div className="deets">
            {recipeDetails ? (
            <div className="recipe-details">
                <div>
                    <h1 id="recipe-name">{recipeDetails.name}</h1>
                </div>
                <section className='image-box'>
                    <img src={recipeDetails.image} alt={recipeDetails.name} />
                </section>
                <section className='time'>
                    <h4>Prep Time : {recipeDetails.prepTime} </h4>
                    <h4>Cook Time : {recipeDetails.cookTime} </h4>
                </section>
                <section className='ingredients'>
                    <h3>Ingredients: </h3>
                    <p>{recipeDetails.ingredients}</p>
                </section>
                <section className='instructions'>
                    <h3>Instructions: </h3>
                    <p>{recipeDetails.instructions}</p>
                </section>
                <div>
                    <h5>Submitted By : {recipeDetails.submittedBy}</h5>
                </div>
            </div>
            ) : <h1>Not Found.</h1>}  

            <div className="buttons">
                <button onClick={goHome}>Return to Recipe List</button>
                <button onClick={editRecipe}>Edit</button>
                <button onClick={deleteRecipe}>Delete</button>
            </div>        
        </div>
    )
}

export default RecipeDetails
