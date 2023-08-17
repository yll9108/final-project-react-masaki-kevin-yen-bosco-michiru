import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function MyRecipes() {
    const myRecipes = useSelector(state => state.recipes.recipes);

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
                        <h3>{recipe.name}</h3>
                        <img src={recipe.image} alt="Recipe" width={100} height={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyRecipes;
