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

//Style
const RecipesPage = styled.div`
    background-image: url("/homePageImg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    height: auto;
    width: 100vw;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const RecipesPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    @media (max-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const RecipesListArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: #6a994e;
    border-radius: 20px;
    margin: 0 10px 20px 10px;
    padding: 40px 20px 20px 20px;
    box-shadow: 0 1px 5px #344e41;
`;

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
                    <SearchInput />
                    <FilterArea />
                    <RecipesList recipes={recipes} />
                </RecipesListArea>
                <MyRecipes />
            </RecipesPageDiv>
        </RecipesPage>
    );
}
