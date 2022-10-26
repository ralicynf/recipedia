import RecipeCard from '../components/RecipeCard'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {

    const [recipes, setRecipes] = useState([])
    let navigate = useNavigate()

    const getRecipeList = async () => {
        const recipes = await axios.get(`http://localhost:3001/recipedia/allrecipes`)
        console.log(recipes)
        setRecipes(recipes.data.recipes)
    }

    const viewRecipeDetails = (id) => {
        navigate(`/recipes/${id}`)
    }

    useEffect(() => {
        getRecipeList()
    }, [])

    return (
        <div>
            <div className="recipes-flex">
                <h1>Recipes</h1>
                <section className='r-flex'>
                    {recipes.map((result) => 
                    <RecipeCard 
                        key={result._id}
                        name={result.name}
                        image={result.image}
                        onClick={viewRecipeDetails}
                    /> )}
                </section>
            </div>
        </div>
    )
}

export default Home