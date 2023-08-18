import Head from "next/head";
import Header from "../../components/Header";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import RecipesList from "@/components/RecipesList";
import MyFridge from "@/components/MyFridge";
import { axiosInstance } from "@/axios";
import MyRecipes from "@/components/MyRecipe";
import FilterArea from "@/components/FilterArea";

export const getStaticProps = async () => {
    try {
        const initialRecipes = await axiosInstance
            .get(
                `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&number=2&fillIngredients=true`
            )
            .then((res) => res.data.results);

        return {
            props: {
                initialRecipes,
            },
        };
    } catch (err) {
        console.log("API not working", err);
        return {
            props: {
                recipes: [],
            },
        };
    }
};

export default function Recipes({ initialRecipes }) {
    const [recipes, setRecipes] = useState(initialRecipes);

    return (
        <>
            <Head>
                <title>Recipes</title>
            </Head>
            <Header />
            <div>Recipes</div>
            <MyFridge />
            <SearchInput setRecipes={setRecipes} />
            <FilterArea setRecipes={setRecipes} />
            <RecipesList recipes={recipes} />
            <MyRecipes />
        </>
    );
}
