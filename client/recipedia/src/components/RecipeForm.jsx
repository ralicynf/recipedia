import axios from 'axios'
import { useState } from 'react'

const RecipeForm = (props) => {
    const startState = {
        name: '',
        image: '',
        prepTime: '',
        cookTime: '',
        ingredients: '',
        instructions: '',
        submittedBy: ''
    }

    const [formState, setFormState] = useState(startState)

    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await axios.post('http://localhost:3001/recipes', formState)
        console.log(res.data)
        setFormState(startState)
        
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value});
    };


    return (
        <div>
            <h2>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Recipe Name">Recipe Name:</label>
                    <input 
                        onChange={handleChange}  
                        type="text"
                        id="name-text"
                        value={formState.name}
                    />
                <label htmlFor="Image Link">Image:</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="image-link"
                        value={formState.image}  
                    />
                <label htmlFor="Prep Time">Prep Time:</label>
                    <input 
                        onChange={handleChange} 
                        type="text"  
                        id="prep-text"
                        value={formState.prepTime}
                    />
                <label htmlFor="Cook Time">Cook Time:</label>
                    <input 
                        onChange={handleChange}  
                        type="text"  
                        id="cook-time-text"
                        value={formState.cookTime}
                    />
                <label htmlFor="Ingredients">Ingredients:</label>
                    <textarea 
                        onChange={handleChange} 
                        id="add-ingredients" 
                        cols="30" 
                        rows="10" 
                        value={formState.ingredients}
                    ></textarea>
                <label htmlFor="Instructions">Instructions:</label>
                    <textarea 
                        onChange={handleChange}  
                        id="add-instructions" 
                        cols="30" 
                        rows="10"
                        value={formState.instructions}
                    ></textarea>
                <label htmlFor="Submitted By">Submitted By:</label>
                    <input 
                        onChange={handleChange}  
                        type="text" 
                        id="submit-text" 
                        value={formState.submittedBy}
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RecipeForm