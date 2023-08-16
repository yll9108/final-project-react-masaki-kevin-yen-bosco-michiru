import React, { useState } from "react";

const MyFridgeSearch = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddClick = () => {
        if (input) {
            setItems((prevData) => [...prevData, input]);
            setInput("");
        }
    };

    const handleDelete = (index) => {
        const ingredientsList = [...items];
        ingredientsList.splice(index, 1);
        setItems(ingredientsList);
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
