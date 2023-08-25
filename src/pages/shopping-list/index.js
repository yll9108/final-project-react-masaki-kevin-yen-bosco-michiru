import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "../../components/Header";
import MyFridge from "@/components/MyFridge";
import RecipeList from "../../components/shopping-list/RecipeList";
import styled from "styled-components";

//Style
const ShoppingListPage = styled.div`
    background-image: url("/homePageImg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 100vw;
    @media (max-width: 1024px) {
        height: 150vh;
        width: 150vw;
    }
`;

const ShoppingListDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
`;

export default function ShoppingList() {
    const recipes = useSelector((state) => state.recipes.recipes);
    const [selecedRecipe, setSelectedRecipe] = useState(null);

    return (
        <ShoppingListPage>
            <Head>
                <title>Shopping List</title>
            </Head>
            <Header />
            <ShoppingListDiv>
                <MyFridge />
                <RecipeList
                    recipes={recipes}
                    setSelectedRecipe={setSelectedRecipe}
                />
                <ItemsToBuy recipe={selecedRecipe} />
            </ShoppingListDiv>
        </ShoppingListPage>
    );
}
