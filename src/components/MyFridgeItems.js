import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFridge } from "@/store/slicers/myFridge";
import styled from "styled-components";

import MyFridgeItem from "./MyFridgeItem";

const MyFridgeItems = () => {
    const items = useSelector((state) => state.fridge.items);
    const dispatch = useDispatch();

    const handleCheckBox = (item) => {


    };

    //Style
    const ItemsUl = styled.ul`
        font-size: 15px;
        list-style-type: none;
        padding: 10px 20px;
        margin: 0;
    `;

    return (
      <div>
        <div>
          <ItemsUl>
            {items.map((data, index) => (
              <MyFridgeItem key={index} item={data}/>
            ))}
          </ItemsUl>
        </div>
      </div>
    );
};

export default MyFridgeItems;
