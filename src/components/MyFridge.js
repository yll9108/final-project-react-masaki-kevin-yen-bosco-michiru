import React from "react";
import MyFridgeSearch from "./MyFridgeSearch";
import MyFridgeItems from "./MyFridgeItems";
import styled from "styled-components";

export default function MyFridge() {
    //Style
    const MyFridge = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: #6a994e;
        border-radius: 20px;
        margin-left: 20px;
        width: 300px;
    `;

    const MyFridgeTitle = styled.h2`
        font-size: 30px;
    `;

    const MyFridgeTip = styled.p``;

    return (
        <MyFridge>
            <MyFridgeTitle>My Fridge</MyFridgeTitle>
            <MyFridgeSearch />
            <MyFridgeItems />
            <MyFridgeTip>Selete items to filter the search</MyFridgeTip>
        </MyFridge>
    );
}
