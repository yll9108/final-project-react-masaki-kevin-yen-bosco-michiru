import Head from "next/head";
import Header from "../../components/Header";
import SearchInput from "@/components/SearchInput";
import { useState, useEffect } from "react";
import RecipesList from "@/components/RecipesList";
import MyFridge from "@/components/MyFridge";
import { axiosInstance } from "@/axios";
import { test } from "./test";
import { useDispatch } from 'react-redux';
import { addToMyRecipes } from '@/store/slicers/myReceips';
import MyRecipes from "@/components/MyRecipe";

export const getStaticProps = async () => {
  try {
    const initialRecipes = await axiosInstance
      .get(
        `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&number=2&fillIngredients=true`
      )
      .then((res) => res.data.results)

    return {
      props: {
        initialRecipes,
      },
    }
  } catch (err) {
    console.log('API not working', err)
    return {
      props: {
        recipes: [],
      },
    }
  }
}

export default function Recipes({ initialRecipes }) {
    const [recipes, setRecipes] = useState(initialRecipes);
    const [ingredientImages, setIngredientImages] = useState([]);
    const [myAddedRecipes, setMyAddedRecipes] = useState([]); // Add this state
    const dispatch = useDispatch();

    useEffect(() => {
        const ingredients = test.products.map((product) => ({
            name: product.title,
            image: product.image,
        }));
        setIngredientImages(ingredients);
    }, []);
    
    const handleAddToLocalStorage = (recipe) => {
        const existingRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
        const updatedRecipes = [...existingRecipes, recipe];
        localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
        setMyAddedRecipes(updatedRecipes); // Update the added recipes in the state
    };
    
    const handleAddToRedux = (item) => { 
        dispatch(addToMyRecipes(item));
        handleAddToLocalStorage(item);
    };

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
                    <button onClick={() => handleAddToRedux(item)}>Add</button>
                </div>
            ))}
            <MyRecipes />
        </>
    );
}
