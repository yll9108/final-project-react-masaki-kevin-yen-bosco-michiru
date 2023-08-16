import { axiosInstance } from "@/axios";
import axios from "axios";
import Head from "next/head";
import Header from "../../components/Header";

export const getStaticProps = async () => {
    try {
        const recipes = await axiosInstance
            .get(
                `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&number=1&fillIngredients=true`
            )
            .then((res) => res.data);
        console.log(recipes);

        const recipesArray = Array.isArray(recipes) ? recipes : [recipes];

        return {
            props: {
                recipes: recipesArray,
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

export default function Recipes(props) {
    return (
        <>
            <Head>
                <title>Recipes</title>
            </Head>
            <Header />
            <div>Recipes</div>
            <ul>
                {props.recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </>
    );
}
