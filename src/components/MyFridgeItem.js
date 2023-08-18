import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromFridge } from "@/store/slicers/myFridge";
import { addmyFridgeIngredients, removemyFridgeIngredients } from "@/store/slicers/search";
import styled from "styled-components";

const MyFridgeItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromFridge(item));
  };
  const handleCheckBox = () => {
    if (!isChecked) {
      dispatch(addmyFridgeIngredients(item));
    } else {
      dispatch(removemyFridgeIngredients(item));
    }
    setIsChecked(!isChecked);
  };

  //Style
  const ItemsLi = styled.li`
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
      <ItemsLi>
        <input type="checkbox" checked={isChecked} onChange={() => handleCheckBox()} />
        {item}
        <DeleteBtn onClick={() => handleDelete()}>X</DeleteBtn>
      </ItemsLi>
    </div>
  );
};

export default MyFridgeItem;
