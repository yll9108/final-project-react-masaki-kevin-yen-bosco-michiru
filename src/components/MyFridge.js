import React from "react";
import MyFridgeSearch from "./MyFridgeSearch";
import MyFridgeItems from "./MyFridgeItems";
import styled from "styled-components";

export default function MyFridge() {
    //Style
    const MyFridgeTitle = styled.h2`
        font-size: 30px;
        margin: 20px;
    `;

    const MyFridge = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
    `;

    const MyFridgeTip = styled.p`
        margin: 0;
    `;

    return (
        <MyFridge>
            <MyFridgeTitle>My Fridge</MyFridgeTitle>
            <MyFridgeSearch />
            <MyFridgeItems />
            <MyFridgeTip>Selete items to filter the search</MyFridgeTip>
        </MyFridge>
    );
}
