import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeForm = (props) => {
    let navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

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
        let res = await axios.post("http://localhost:3001/recipedia/recipes", formState)
        console.log(res.data)
        setFormState(startState)
        goHome()
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value});
    };


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

export default RecipeForm