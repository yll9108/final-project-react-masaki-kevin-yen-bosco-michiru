import Head from "next/head";
import Header from "../../components/Header";
import SearchInput from "@/components/SearchInput";
import { useState, useEffect } from "react";
import RecipesList from "@/components/RecipesList";
import MyFridge from "@/components/MyFridge";
import { axiosInstance } from "@/axios";
import { test } from "./test";

export const getStaticProps = async () => {
    try {
        const initialRecipes = await axiosInstance
            .get(
                `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&number=2&fillIngredients=true`
            )
            .then((res) => res.data.results);
        console.log(initialRecipes);
        return {
            props: {
                initialRecipes,
            },
        };
    } catch (err) {
        return {
            props: {
                recipes: [],
            },
        };
    }
};

export default function Recipes({ initialRecipes }) {
    const [recipes, setRecipes] = useState(initialRecipes);
    const [ingredientImages, setIngredientImages] = useState([]);

    useEffect(() => {
        const ingredients = test.products.map((product) => ({
            name: product.title,
            image: product.image,
        }));
        setIngredientImages(ingredients);
    }, []);

    return (
        <>
            <Head>
                <title>Recipes</title>
            </Head>
            <Header />
            <div>Recipes</div>
            <MyFridge />
            <SearchInput setRecipes={setRecipes} />
            <RecipesList recipes={recipes} />
            {ingredientImages.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt="recipe Image" width={100} height={100}/>
                    <p>{item.name}</p>
                </div>
            ))}
        </>
    );
}
