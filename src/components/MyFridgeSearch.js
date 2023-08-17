import React, { useState } from "react";
import { axiosInstance } from "@/axios";
import { addToFridge, removeFromFridge } from "@/store/slicers/myFridge";
import { useDispatch, useSelector } from "react-redux";

const MyFridgeSearch = () => {
    const [input, setInput] = useState("");
    const items = useSelector((state) => state.fridge);
    const dispatch = useDispatch();

    const handleInputChange = async (e) => {
        setInput(e.target.value);

        await axiosInstance
            .get(
                `food/ingredients/autocomplete?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&query=${input}&number=5`
            )
            .then((res) => {
                console.log(res);
            });
    };

    const handleAddClick = () => {
        if (input) {
            dispatch(addToFridge(input));
            setInput("");
        }
    };

    const handleDelete = (index) => {
        dispatch(removeFromFridge(items[index]));
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                id="inputIngredients"
                placeholder="Search"
            ></input>
            <button onClick={handleAddClick}>Add</button>
            <div>
                <ul>
                    {items.map((data, index) => (
                        <li key={index}>
                            {data}
                            <button onClick={() => handleDelete(index)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyFridgeSearch;
