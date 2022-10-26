import RecipeForm from "../components/RecipeForm"
import { useState, useEffect } from "react"
import axios from 'axios'


const AddRecipe = () => {

    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        try {
        let res = await axios.get( `http://localhost:3001/recipedia/allrecipes`)
        console.log(res.data)
        setRecipes(res.data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <div>
            <h2>Add New Recipe</h2>
            <RecipeForm />
        </div>
    )

}

export default AddRecipe