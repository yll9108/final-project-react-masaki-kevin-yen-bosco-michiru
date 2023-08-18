import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeFromMyRecipes } from '@/store/slicers/myReceips'

function MyRecipes() {
    const myRecipes = useSelector(state => state.recipes.recipes);
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const handleOnClick = (recipeId) => {
      dispatch(removeFromMyRecipes(recipeId))
    } 
    const toggleImage = (recipeId, recipeImage) => {
        if (selectedImage === recipeImage) {
            setSelectedImage(null);
            setShowImage(false);
        } else {
            setSelectedImage(recipeImage);
            setShowImage(true);
        }}
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
                        <button onClick={() => toggleImage(recipe.id, recipe.image)}>
                            {showImage && selectedImage === recipe.image ? 'Hide' : 'Show'}
                        </button>
                        {showImage && selectedImage === recipe.image && (
                            <div>
                                <img src={selectedImage} alt={recipe.title} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyRecipes;
