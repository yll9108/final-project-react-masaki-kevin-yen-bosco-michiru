import React from "react";
import Recipe from "./Recipe";
import { styled } from "styled-components";

//Style
const RecipesListUl = styled.ul`
    margin: 0;
    padding: 0;
`;

function RecipeList({ recipes, setSelectedRecipe }) {
    return (
        <RecipesListUl>
            {recipes.map((recipe) => (
                <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    setSelectedRecipe={setSelectedRecipe}
                />
            ))}
        </RecipesListUl>
    );
}

export default RecipeList;
