import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromMyRecipes } from "@/store/slicers/myReceips";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

//Style
const MyRecipesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6a994e;
    border-radius: 20px;
    margin: 0 20px 20px 0;
    width: 300px;
`;

const MyRecipesTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #a3b18a;
    border-radius: 20px 20px 0 0;
    width: 300px;
    height: 70px;
`;

const MyRecipesTitle = styled.h2`
    font-size: 30px;
`;

const MyRecipesUl = styled.ul`
    font-size: 15px;
    list-style-type: none;
    padding: 20px;
`;

const MyRecipesLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid;
    margin-bottom: 10px;
    width: 260px;
`;

const MyRecipesListTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lobster", "Poppins";
    font-size: 15px;
`;

const MyRecipesRemoveBtn = styled.button`
    font-size: 15px;
    margin: 5px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
`;

function MyRecipes() {
    const myRecipes = useSelector((state) => state.recipes.recipes);
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const handleOnClick = (recipeId) => {
        dispatch(removeFromMyRecipes(recipeId));
    };
    const toggleImage = (recipeId, recipeImage) => {
        if (selectedImage === recipeImage) {
            setSelectedImage(null);
            setShowImage(false);
        } else {
            setSelectedImage(recipeImage);
            setShowImage(true);
        }
    };

    return (
        <MyRecipesDiv>
            <MyRecipesTitleDiv>
                <MyRecipesTitle>My Recipes</MyRecipesTitle>
            </MyRecipesTitleDiv>
            <MyRecipesUl>
                {myRecipes &&
                    myRecipes.map((recipe, index) => (
                        <MyRecipesLi key={index}>
                            <MyRecipesListTitle>
                                {recipe.title}
                            </MyRecipesListTitle>
                            <MyRecipesRemoveBtn
                                onClick={() => handleOnClick(recipe.id)}
                            >
                                <TiDelete size={25} />
                            </MyRecipesRemoveBtn>
                            {showImage && selectedImage === recipe.image && (
                                <div>
                                    <img
                                        src={selectedImage}
                                        alt={recipe.title}
                                    />
                                </div>
                            )}
                        </MyRecipesLi>
                    ))}
            </MyRecipesUl>
        </MyRecipesDiv>
    );
}

export default MyRecipes;
