import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "../../components/Header";
import MyFridge from "@/components/MyFridge";
import RecipeList from "../../components/shopping-list/RecipeList";

export default function ShoppingList() {
    const recipes = useSelector((state) => state.recipes.recipes);
    const [selecedRecipe, setSelectedRecipe] = useState(null);

    return (
        <>
            <Head>
                <title>ShoppingList</title>
            </Head>
            <Header />
            <MyFridge />
            <RecipeList
                recipes={recipes}
                setSelectedRecipe={setSelectedRecipe}
            />
            <ItemsToBuy recipe={selecedRecipe} />
        </>
    );
}
