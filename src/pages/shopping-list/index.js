import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { useSelector } from "react-redux";
import { recipe } from "./practice";

import Header from "../../components/Header";
import RecipeList from "../../components/shopping-list/RecipeList";

export default function ShoppingList() {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <>
      <Head>
        <title>ShoppingList</title>
      </Head>
      <Header />
      <RecipeList recipes={recipes} />
      {/* I'm placing this here for now/michiru */}
      <ItemsToBuy recipe={recipe} />
    </>
  );
}
