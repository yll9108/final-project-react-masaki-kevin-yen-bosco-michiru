import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeFromMyRecipes } from '@/store/slicers/myReceips'

function MyRecipes() {
    const myRecipes = useSelector(state => state.recipes.recipes);
    const dispatch = useDispatch()
    const handleOnClick = (recipeId) => {
      dispatch(removeFromMyRecipes(recipeId))
    }
    console.log(myRecipes)
    useEffect(() => {
    
        console.log('MyRecipes has changed:', myRecipes);
    }, [myRecipes]);

    return (
        <div>
            <h2>My Recipes</h2>
            <ul>
                {myRecipes && myRecipes.map((recipe, index) => (
                    <li key={index}>
                        <h3>{recipe.title}</h3>
                        <button onClick={() => handleOnClick(recipe.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyRecipes;
