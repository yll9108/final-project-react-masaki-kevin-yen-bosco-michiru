import React from 'react'
import { useSelector } from 'react-redux'

function ItemsToBuy({ recipe }) {
  const myFridgeItems = useSelector((state) => state.fridge.items)
  const searchedItems = useSelector((state) => state.search.myFridgeIngredients)

  //take out the ingredients and put into an array
  const missedIngredients = []
  recipe?.missedIngredients?.map((ingredient) => {
    missedIngredients.push(ingredient.name)
  })

  //combine searchedItems and missedIngredients
  const requiredIngredients = missedIngredients.concat(searchedItems)

  //find missing ingredients
  const missingIngredients = requiredIngredients.filter(
    (requiredIngredient) => {
      return !myFridgeItems.includes(requiredIngredient)
    }
  )

  return (
    <div>
      {missingIngredients.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </div>
  )
}

export default ItemsToBuy
