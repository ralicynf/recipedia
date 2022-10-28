import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeEdit = (props) => {
    let navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const startState = {
        name: `${props.name}`,
        image: `${props.image}`,
        prepTime: `${props.prepTime}`,
        cookTime: `${props.cookTime}`,
        ingredients: `${props.ingredients}`,
        instructions: `${props.instructions}`,
        submittedBy: `${props.submittedBy}`
    }

    const [formState, setFormState] = useState(startState)

    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await axios.post(`http://localhost:3001/recipedia/recipes/${id}`, formState)
        console.log(res.data)
        setFormState(startState)
        goHome()
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value});
    };

    const [recipeUpdate, setRecipeUpdate] = useState()

    const getRecipeUpdate = async () => {
        const response = await axios.put(`http://localhost:3001/recipedia/recipes/${id}`, formState)
        console.log(response)
        setRecipeUpdate(response.data.recipe)
    }


    return (
        <div className="the-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="Recipe Name">Recipe Name:</label>
                    <input 
                        onChange={handleChange}  
                        type="text"
                        id="name"
                        value={formState.name}
                    />
                <label htmlFor="Image Link">Image:</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="image"
                        value={formState.image}  
                    />
                <label htmlFor="Prep Time">Prep Time:</label>
                    <input 
                        onChange={handleChange} 
                        type="text"  
                        id="prepTime"
                        value={formState.prepTime}
                    />
                <label htmlFor="Cook Time">Cook Time:</label>
                    <input 
                        onChange={handleChange}  
                        type="text"  
                        id="cookTime"
                        value={formState.cookTime}
                    />
                <label htmlFor="Ingredients">Ingredients:</label>
                    <textarea 
                        onChange={handleChange} 
                        id="ingredients" 
                        cols="30" 
                        rows="10" 
                        value={formState.ingredients}
                    ></textarea>
                <label htmlFor="Instructions">Instructions:</label>
                    <textarea 
                        onChange={handleChange}  
                        id="instructions" 
                        cols="30" 
                        rows="10"
                        value={formState.instructions}
                    ></textarea>
                <label htmlFor="Submitted By">Submitted By:</label>
                    <input 
                        onChange={handleChange}  
                        type="text" 
                        id="submittedBy" 
                        value={formState.submittedBy}
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RecipeEdit