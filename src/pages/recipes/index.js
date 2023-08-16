import { axiosInstance } from "@/axios";
import Head from "next/head";
import Header from "../../components/Header";

export const getStaticProps = async () => {
    try {
        const response = await axiosInstance.get(
            `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&number=2&fillIngredients=true`
        );
        const recipes = response.data.results.map((recipe) => ({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
        }));
        return {
            props: {
                recipes,
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
                    <li key={recipe.id}>
                        {recipe.title}
                        <img src={recipe.image} alt={recipe.title} />
                    </li>
                ))}
            </ul>
        </>
    );
}
