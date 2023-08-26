import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//Style
const ItemsToBuyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6a994e;
    border-radius: 20px;
    margin: 0 20px 20px 0;
    width: 300px;
    box-shadow: 0 1px 5px #344e41;
    @media (max-width: 450px) {
        width: 90vw;
        margin:0;
    }
`;

const ItemsToBuyTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #a3b18a;
    border-radius: 20px 20px 0 0;
    width: 300px;
    height: 70px;
    @media (max-width: 450px) {
        width: 90vw;
    }
`;

const ItemsToBuyTitle = styled.h2`
    font-size: 30px;
`;

const IngredientsUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    list-style-type: none;
    padding: 20px;
`;

const IngredientsLi = styled.li`
    margin-bottom: 20px;
`;

function ItemsToBuy({ recipe }) {
    const myFridgeItems = useSelector((state) => state.fridge.items);
    const searchedItems = useSelector(
        (state) => state.search.myFridgeIngredients
    );

    //take out the ingredients and put into an array
    const missedIngredients = [];
    recipe?.missedIngredients?.map((ingredient) => {
        missedIngredients.push(ingredient.name);
    });

    //combine searchedItems and missedIngredients
    const requiredIngredients = missedIngredients.concat(searchedItems);

    //find missing ingredients
    const missingIngredients = requiredIngredients.filter(
        (requiredIngredient) => {
            return !myFridgeItems.includes(requiredIngredient);
        }
    );

    return (
        <ItemsToBuyDiv>
            <ItemsToBuyTitleDiv>
                <ItemsToBuyTitle>Items To Buy</ItemsToBuyTitle>
            </ItemsToBuyTitleDiv>
            <IngredientsUl>
                {missingIngredients.map((item) => {
                    return <IngredientsLi key={item}>{item}</IngredientsLi>;
                })}
            </IngredientsUl>
        </ItemsToBuyDiv>
    );
}

export default ItemsToBuy;
