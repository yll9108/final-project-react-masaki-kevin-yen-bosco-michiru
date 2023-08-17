import axios from "axios";
import React from "react";
import { useState } from "react";

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

export default function FilterArea() {
    const [selectedCuisines, setSelectedCuisines] = useState([]);

    const handleCheckboxChange = (value) => {
        setSelectedCuisines((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?${
                    process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY
                }&cuisine=${selectedCuisines.join(",")}&number=5`
            );
        } catch (error) {
            console.log("API ERROR", error);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>FilterArea</h1>
                    <label>CUISINE</label>
                    <div>
                        {availableCuisines.map((cuisine) => (
                            <label key={cuisine}>
                                <input
                                    type="checkbox"
                                    value={cuisine}
                                    checked={selectedCuisines.includes(cuisine)}
                                    onChange={() =>
                                        handleCheckboxChange(cuisine)
                                    }
                                />
                                {cuisine}
                            </label>
                        ))}
                    </div>
                    <h3>DIET</h3>
                    <h3>INTOLERENCES</h3>
                </form>
            </div>
        </>
    );
}
