import { useState } from "react";
import { removeFromMyRecipes } from "@/store/slicers/myReceips";
import { useDispatch } from "react-redux";

function Recipe({ recipe, setSelectedRecipe }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const remove = (recipe) => {
    dispatch(removeFromMyRecipes(recipe));
    setSelectedRecipe(null);
  };

  const toggleAccordion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <li>
      <h2
        style={{
          cursor: "pointer",
        }}
        onClick={() => setSelectedRecipe(recipe)}
      >
        {recipe.title}
      </h2>
      <button onClick={() => remove(recipe)}>Remove</button>
      {isExpanded ? <button onClick={toggleAccordion}>Hide</button> : <button onClick={toggleAccordion}>Show</button>}
      {isExpanded && (
        <div>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      )}
    </li>
  );
}

export default Recipe;
