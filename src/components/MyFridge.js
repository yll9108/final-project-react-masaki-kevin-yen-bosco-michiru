import React from "react";
import MyFridgeSearch from "./MyFridgeSearch";
import MyFridgeItems from "./MyFridgeItems";
import styled from "styled-components";

//Style
const MyFridgeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6a994e;
    border-radius: 20px;
    margin: 0 0 20px 20px;
    width: 300px;
    box-shadow: 0 1px 5px #344e41;
    @media (max-width: 450px) {
        width: 90vw;
        margin:0 ;
        padding:0
    }
`;

const MyFrigeTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #a3b18a;
    border-radius: 20px 20px 0 0;
    width: 300px;
    height: 70px;
    @media (max-width: 450px) {
        width: 90vw;
        margin:0;
        padding:0
    }
`;

const MyFridgeTitle = styled.h2`
    font-size: 30px;
`;

const MyFridgeTip = styled.p`
    margin-bottom: 20px;
`;

export default function MyFridge() {
    return (
        <MyFridgeDiv>
            <MyFrigeTitleDiv>
                <MyFridgeTitle>My Fridge</MyFridgeTitle>
            </MyFrigeTitleDiv>
            <MyFridgeSearch />
            <MyFridgeItems />
            <MyFridgeTip>Select items to filter the search</MyFridgeTip>
        </MyFridgeDiv>
    );
}
