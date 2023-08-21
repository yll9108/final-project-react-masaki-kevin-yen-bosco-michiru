import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToMyRecipes } from "@/store/slicers/myReceips";
import { styled } from "styled-components";

function RecipesList({ recipes }) {
    const dispatch = useDispatch();
    const handleOnClick = (recipe) => {
        dispatch(addToMyRecipes(recipe));
    };

    //Style
    const RecipesList = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 20px;
    `;

    const RecipesItems = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const RecipesListLi = styled.li`
        list-style-type: none;
        padding: 20px;
        margin: 10px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 300px;
    `;

    const RecipesTitle = styled.p`
        font-size: 15px;
        margin: 5px;
    `;

    const AddBtn = styled.button`
        padding: 10px 15px;
        margin-top: 10px;
        font-size: 15px;
        border-radius: 5px;
        background-color: black;
        border: none;
        color: white;
        cursor: pointer;
    `;

    return (
        <RecipesList>
            {recipes &&
                recipes.map((recipe) => {
                    return (
                        <RecipesListLi key={recipe.id}>
                            <RecipesItems>
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    width={200}
                                    height={200}
                                />
                                <RecipesTitle>{recipe.title}</RecipesTitle>
                            </RecipesItems>
                            <AddBtn
                                onClick={() => {
                                    handleOnClick(recipe);
                                }}
                            >
                                Add
                            </AddBtn>
                        </RecipesListLi>
                    );
                })}
        </RecipesList>
    );
}

export default RecipesList;
