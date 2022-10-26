import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import Resources from './pages/Resources';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<RecipeList />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/recipes/recipeId' element={<RecipeDetails />} />
          <Route path='/recipes/addRecipe' elemet={<AddRecipe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
