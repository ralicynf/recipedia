import axios from 'axios'
import { useState } from 'react'

const AddRecipe = () => {
    const startState = {
        Name: '',
        Image: '',
        PrepTime: '',
        CookTime: '',
        Ingredients: '',
        SubmittedBy: ''
    }

    const [formState, setFormState] = useState(startState)

    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await axios.post('http://localhost:3001/recipes', formState)
        console.log(res.data)
        setFormState(startState)
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value})
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Recipe Name:</label>
                <input>hello</input>

        </form>
    )
}

export default AddRecipe