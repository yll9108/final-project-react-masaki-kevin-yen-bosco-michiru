import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { recipe } from "./practice";
import { useDispatch } from "react-redux";
import { setDataFromStorage } from "@/store/slicers/myReceips";

import Header from "../../components/Header";
import RecipeList from "../../components/shopping-list/RecipeList";

export default function ShoppingList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDataFromStorage());
  }, []);
  const recipes = useSelector((state) => state.recipes.recipes);
  const [selecedRecipe, setSelectedRecipe] = useState([]);

  return (
    <>
      <Head>
        <title>ShoppingList</title>
      </Head>
      <Header />
      <RecipeList recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
      {/* I'm placing this here for now/michiru */}
      <ItemsToBuy recipe={selecedRecipe} />
    </>
  );
}
