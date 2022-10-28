import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <nav>
                <div id="nav-logo">
                    <h1>Recipedia</h1>
                </div>
                <div></div>
                <div className="nav-links">
                    <Link to='/'>Home </Link>
                    <Link to='/recipes/addRecipe' >Add Recipe</Link>
                    <Link to='/resources' > Resources</Link>
                </div>
            </nav>
        </header>

    )
}

export default Header


// <Route path='/' element={<Home />} />
//           <Route path='/recipes' element={<RecipeList />} />
//           <Route path='/resources' element={<Resources />} />
//           <Route path='/recipes/recipeId' element={<RecipeDetails />} />
//           <Route path='/recipes/addRecipe' elemet={<AddRecipe />} />