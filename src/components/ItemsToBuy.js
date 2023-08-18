import React from 'react'
import { useSelector } from 'react-redux'

function ItemsToBuy({ recipe }) {
  const myFridgeItems = useSelector((state) => state.fridge)

  //take out the ingredients and put into an array
  const requiredIngredients = []
  recipe?.missedIngredients?.map((ingredient) => {
    requiredIngredients.push(ingredient.name)
  })

  console.log(requiredIngredients)

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
