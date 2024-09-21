import React,{useState} from 'react';
import axios from "axios";
import RecipeList from './RecipeList';
import './App.css';

function App() {
  const [query,setQuery]=useState("");
  const [recipes,setRecipes]=useState([]);
  const [error,setError]=useState("");

  const API_KEY="fef3f471c9e449889049346e238ccf40";

  //Fetch recipes from the API based on user input
  const getRecipes=async ()=>{
    try{
      const response=await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${API_KEY}`
      );
      setRecipes(response.data.results);
    } catch(err) {
      setError("Failed to fetch recipes. Please try again.");
    }
  };

  //Handle search button click
  const handleSearch=(e)=>{
    e.preventDefault();
    if(query!==""){
      getRecipes();
      setError("");
    } else {
      setError("Please enter a search term.");
    }
  };

  //Update query on input change and clear results if input is empty
  const handleInputChange=(e)=>{
    const value=e.target.value;
    setQuery(value);

    //if input cleared,reset the recipe list
    if(value===""){
      setRecipes([]);
      setError("");
    }
  }

  return(
    <div className="App">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={handleInputChange}
        /><br />
        <button type="submit">Search</button>
      </form>
      { error && <p className="error">{error}</p>}
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
