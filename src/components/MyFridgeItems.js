import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFridge } from '@/store/slicers/myFridge'
import styled from 'styled-components'

import MyFridgeItem from './MyFridgeItem'

const MyFridgeItems = () => {
  const items = useSelector((state) => state.fridge.items)
  console.log(items)
  const dispatch = useDispatch()

  const handleDelete = (index) => {
    dispatch(removeFromFridge(items[index]))
  }

  //Style
  const ItemsUl = styled.ul`
    font-size: 15px;
    list-style-type: none;
    padding: 10px 20px;
    margin: 0;
  `

  const ItemsLi = styled.li`
    margin: 10px 0;
  `

  const DeleteBtn = styled.button`
    font-size: 15px;
    margin: 5px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  `

  return (
    <div>
      <div>
        <ItemsUl>
          {items.map((data, index) => (
            <ItemsLi key={index}>
              {data}
              <DeleteBtn onClick={() => handleDelete(index)}>X</DeleteBtn>
            </ItemsLi>
          ))}
        </ItemsUl>
      </div>
    </div>
  )
}

export default MyFridgeItems
