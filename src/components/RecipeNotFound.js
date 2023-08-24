import React from "react";
import styled from "styled-components";

//Style
const RecipesNotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const NotFoundText = styled.h1`
    font-size: 30px;
    margin: 5px;
`;

function RecipeNotFound() {
    return (
        <RecipesNotFoundDiv>
            <NotFoundText>No recipes matched your search 😔</NotFoundText>
            <NotFoundText>Switch things up and search again ✊</NotFoundText>
        </RecipesNotFoundDiv>
    );
}

export default RecipeNotFound;
