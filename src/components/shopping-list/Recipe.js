import React from "react";

function Recipe({ recipe }) {
  return (
    <li>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
    </li>
  );
}

export default Recipe;
