import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import EditRecipe from './pages/EditRecipe';
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
          <Route path='/resources' element={<Resources />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} id="r-card"/>
          <Route path='/recipes/:id/edit' element={<EditRecipe />} />
          <Route path='/recipes/addRecipe' element={<AddRecipe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
