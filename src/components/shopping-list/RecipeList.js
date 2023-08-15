import React from "react";
import { useSelector } from "react-redux";

import Recipe from "./Recipe";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes.items);
  return (
    <ul>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

export default RecipeList;
