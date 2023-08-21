import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "../../components/Header";
import MyFridge from "@/components/MyFridge";
import RecipeList from "../../components/shopping-list/RecipeList";
import { styled } from "styled-components";

export default function ShoppingList() {
    const recipes = useSelector((state) => state.recipes.recipes);
    const [selecedRecipe, setSelectedRecipe] = useState(null);

    //Style
    const ShoppingListPage = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    return (
        <>
            <Head>
                <title>ShoppingList</title>
            </Head>
            <Header />
            <ShoppingListPage>
                <MyFridge />
                <RecipeList
                    recipes={recipes}
                    setSelectedRecipe={setSelectedRecipe}
                />
                <ItemsToBuy recipe={selecedRecipe} />
            </ShoppingListPage>
        </>
    );
}
