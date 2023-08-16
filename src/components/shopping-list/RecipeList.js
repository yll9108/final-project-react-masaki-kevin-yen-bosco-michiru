import React from "react";

import Recipe from "./Recipe";

function RecipeList({ recipes, setSelectedRecipe }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} setSelectedRecipe={setSelectedRecipe} />
      ))}
    </ul>
  );
}

export default RecipeList;
