import Head from "next/head";
import Header from "../../components/Header";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import RecipesList from "@/components/RecipesList";
import MyFridge from "@/components/MyFridge";
import { axiosInstance } from "@/axios";
import MyRecipes from "@/components/MyRecipe";
import FilterArea from "@/components/FilterArea";
import styled from "styled-components";
import { useFetch } from "@/hooks/useFetch";

export const getStaticProps = async () => {
    try {
        const initialRecipes = await axiosInstance
            .get(
                `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&number=3&fillIngredients=true`
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

    //Style
    const RecipesPage = styled.div`
        background-image: url("/homePageImg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100vh;
        width: 100vw;
    `;

    const RecipesPageDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
    `;

    const RecipesListArea = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #6a994e;
        border-radius: 20px;
        margin: 0 10px;
        padding: 20px;
    `;
    console.log(recipes);
    useFetch(setRecipes);

    return (
        <RecipesPage>
            <Head>
                <title>Recipes</title>
            </Head>
            <Header />

            <RecipesPageDiv>
                <MyFridge />
                <RecipesListArea>
                    <SearchInput setRecipes={setRecipes} />
                    <FilterArea setRecipes={setRecipes} />
                    <RecipesList recipes={recipes} />
                </RecipesListArea>
                <MyRecipes />
            </RecipesPageDiv>
        </RecipesPage>
    );
}
