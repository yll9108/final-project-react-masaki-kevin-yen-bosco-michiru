import React from "react";
import MyFridgeSearch from "./MyFridgeSearch";
import MyFridgeItems from "./MyFridgeItems";
import styled from "styled-components";

export default function MyFridge() {
    const MyFridge = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        padding: 0;
    `;

    return (
        <MyFridge>
            <h1>My Fridge</h1>
            <MyFridgeSearch />
            <MyFridgeItems />
            <p>Selete items to filter the search</p>
        </MyFridge>
    );
}
