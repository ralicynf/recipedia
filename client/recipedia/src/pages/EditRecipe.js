import RecipeEdit from "../components/RecipeEdit";
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditRecipe = () => {

    return (
        <div className="form">
            <h2 id='update-recipe'>Update Recipe</h2>
            <RecipeEdit />
        </div>

    )

}

export default EditRecipe