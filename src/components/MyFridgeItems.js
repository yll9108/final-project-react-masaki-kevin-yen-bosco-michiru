import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFridge } from "@/store/slicers/myFridge";
import styled from "styled-components";
import { FaDeleteLeft } from "react-icons/fa6";

const MyFridgeItems = () => {
    const items = useSelector((state) => state.fridge.items);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(removeFromFridge(items[index]));
    };

    //Style
    const ItemsUl = styled.ul`
        font-size: 15px;
        list-style-type: none;
        padding: 20px;
        margin: 0;
    `;

    const ItemsLi = styled.li`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid;
        width: 200px;
        margin: 10px 0;
    `;

    const DeleteBtn = styled.button`
        font-size: 15px;
        margin: 5px;
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
    `;

    return (
        <div>
            <div>
                <ItemsUl>
                    {items.map((data, index) => (
                        <ItemsLi key={index}>
                            {data}
                            <DeleteBtn onClick={() => handleDelete(index)}>
                                <FaDeleteLeft />
                            </DeleteBtn>
                        </ItemsLi>
                    ))}
                </ItemsUl>
            </div>
        </div>
    );
};

export default MyFridgeItems;
