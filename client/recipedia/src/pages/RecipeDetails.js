import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RecipeDetails = (props) => {
    let { recipeId } = useParams()

    const [recipeDetails, setRecipeDetails] = useState(null)

    const getRecipeDetails = async () => {
        const response = await axios.get(`http://localhost:3001/recipedia/recipes/${recipeId}`)
        setRecipeDetails(response.data)
    }
    useEffect(() => {
        getRecipeDetails()
    }, [recipeId])

    return (
        <div>
            <div className="recipeList">
                
            </div>
        </div>
    )
}

export default RecipeDetails