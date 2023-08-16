import { useState } from "react";

function Recipe({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <li>
      <h2>{recipe.title}</h2>
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
