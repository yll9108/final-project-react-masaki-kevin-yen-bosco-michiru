import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaDeleteLeft } from "react-icons/fa6";

import MyFridgeItem from "./MyFridgeItem";

const MyFridgeItems = () => {
  const items = useSelector((state) => state.fridge.items);

  //Style
  const ItemsUl = styled.ul`
    font-size: 15px;
    list-style-type: none;
    padding: 10px 20px;
    margin: 0;
  `;

<<<<<<< HEAD
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
=======
  return (
    <div>
      <ItemsUl>
        {items.map((data, index) => (
          <MyFridgeItem key={index} item={data} />
        ))}
      </ItemsUl>
    </div>
  );
>>>>>>> main
};

export default React.memo(MyFridgeItems);
