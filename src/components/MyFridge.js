import React from "react";
import MyFridgeSearch from "./MyFridgeSearch";
import MyFridgeItems from "./MyFridgeItems";
import styled from "styled-components";

export default function MyFridge() {
    const MyFridge = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        padding: 0 20px;
    `;

    return (
        <MyFridge>
            <h2>My Fridge</h2>
            <MyFridgeSearch />
            <MyFridgeItems />
            <p style={{ margin: "0" }}>Selete items to filter the search</p>
        </MyFridge>
    );
}
