import React from 'react'
import Image from 'next/image'

function RecipesList({ recipes }) {
  console.log(recipes)
  return (
    <div>
      {recipes.map((recipe) => {
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
            <button>add</button>
          </li>
        )
      })}
    </div>
  )
}

export default RecipesList
