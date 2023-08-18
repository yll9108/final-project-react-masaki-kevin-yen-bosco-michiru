import { axiosInstance } from "@/axios";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import RecipeList from "./shopping-list/RecipeList";

const availableCuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
];

export default function FilterArea({ setRecipes }) {
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    // const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // 在选中的复选框内容发生变化时，执行获取食谱的操作
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
                        process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY
                    }&cuisine=${selectedCuisines.join(",")}&number=10`
                );
                setRecipes(response.data.results);
            } catch (error) {
                console.log("API ERROR", error);
            }
        };

        fetchRecipes();
    }, [selectedCuisines]);

    const handleCheckboxChange = (value) => {
        setSelectedCuisines((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    return (
        <>
            <div>
                <h1>FilterArea</h1>
                <label>CUISINE</label>
                <div>
                    {availableCuisines.map((cuisine) => (
                        <label key={cuisine}>
                            <input
                                type="checkbox"
                                value={cuisine}
                                checked={selectedCuisines.includes(cuisine)}
                                onChange={() => handleCheckboxChange(cuisine)}
                            />
                            {cuisine}
                        </label>
                    ))}
                </div>
                <h3>DIET</h3>
                <h3>INTOLERENCES</h3>
            </div>
            {/* <div>
                <h2>Recipes</h2>
                <RecipeList recipes={recipes} />
            </div> */}
            {/* for testing */}
        </>
    );
}
