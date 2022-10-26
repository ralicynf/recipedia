import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <nav>
                <Link to='/' >Home </Link>
                <Link to='/recipes' >Recipe List</Link>
                <Link to='/recipes/addRecipe' >Add Recipe</Link>
                <Link to='/resources' > Resources</Link>
            </nav>
        </header>

    )
}

export default Header

/* <Link to='/'>Home</Link>
<Link to='/recipelist'>Recipe List</Link>
<Link to='/resources'>Resources</Link> */

// <Route path='/' element={<Home />} />
//           <Route path='/recipes' element={<RecipeList />} />
//           <Route path='/resources' element={<Resources />} />
//           <Route path='/recipes/recipeId' element={<RecipeDetails />} />
//           <Route path='/recipes/addRecipe' elemet={<AddRecipe />} />