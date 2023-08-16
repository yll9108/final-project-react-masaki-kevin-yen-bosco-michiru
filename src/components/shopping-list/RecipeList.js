import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Recipe from "./Recipe";

function RecipeList() {
  // const recipes = useSelector((state) => state.recipes.items);
  const recipes = [
    {
      title: "Pasta",
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      title: "Pizza",
      image: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    },
  ];
  return (
    <ul>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

export default RecipeList;
