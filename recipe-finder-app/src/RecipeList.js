import React from "react";
import './RecipeList.css';

const RecipeList=({recipes})=>{
    if(!recipes.length){
        return <p>No recipes found. Try searching for somethinge else!</p>;
    }

    return(
        <div className="recipe-list">
            {recipes.map((recipe)=> (
                <div key={recipe.id} className="recipe-card">
                    <h2>{recipe.title}</h2>
                    <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} alt={recipe.title}/>
                    <p>
                        <strong>Ready in : </strong>{recipe.readyInMinutes} minutes
                    </p>
                    <a href={`https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`} target="_blank" rel="noopener noreferrer">View Recipe</a>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;