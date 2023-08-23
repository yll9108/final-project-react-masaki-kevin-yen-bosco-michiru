import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToMyRecipes } from "@/store/slicers/myReceips";
import styled from "styled-components";

//Style
const RecipesListDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const RecipesItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RecipesListLi = styled.li`
    background-color: #a3b18a;
    border-radius: 10px;
    list-style-type: none;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    height: 300px;
    box-shadow: 0 1px 5px #344e41;
`;

const RecipesTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin: 10px;
`;

const AddBtn = styled.button`
    padding: 10px 15px;
    font-size: 15px;
    border-radius: 5px;
    background-color: #dad7cd;
    border: none;
    color: black;
    cursor: pointer;
`;

function RecipesList({ recipes }) {
    const dispatch = useDispatch();
    const handleOnClick = (recipe) => {
        dispatch(addToMyRecipes(recipe));
    };

    return (
        <RecipesListDiv>
            {recipes &&
                recipes.map((recipe) => {
                    return (
                        <RecipesListLi key={recipe.id}>
                            <RecipesItems>
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    width={170}
                                    height={170}
                                    style={{ borderRadius: "10px" }}
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
        </RecipesListDiv>
    );
}

export default RecipesList;
