import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFridge } from "@/store/slicers/myFridge";

const MyFridgeItems = () => {
    const items = useSelector((state) => state.fridge);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(removeFromFridge(items[index]));
    };

    return (
        <div>
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

export default MyFridgeItems;
