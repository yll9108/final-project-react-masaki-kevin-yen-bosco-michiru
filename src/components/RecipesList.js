import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToMyRecipes } from '@/store/slicers/myReceips'

function RecipesList({ recipes }) {
  const dispatch = useDispatch()
  const handleOnClick = (recipe) => {
    dispatch(addToMyRecipes(recipe))
  }

  return (
    <div>
      {recipes&&recipes.map((recipe) => {
        return (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <div>
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={200}
                height={200}
              />
            </div>
            <button
              onClick={() => {
                handleOnClick(recipe)
              }}
            >
              add
            </button>
          </li>
        )
      })}
    </div>
  )
}

export default RecipesList
