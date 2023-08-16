import React from "react";

import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

export default RecipeList;
