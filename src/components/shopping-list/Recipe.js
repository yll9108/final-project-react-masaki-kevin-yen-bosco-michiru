import { useState } from "react";
import { removeFromMyRecipes } from "@/store/slicers/myReceips";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Recipe({ recipe, setSelectedRecipe }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useDispatch();

    const remove = (recipe) => {
        dispatch(removeFromMyRecipes(recipe.id));
        setSelectedRecipe(null);
    };

    const toggleAccordion = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    //Style
    const RecipesList = styled.li`
        background-color: #6a994e;
        /* border: 1px solid black; */
        border-radius: 20px;
        list-style-type: none;
        padding: 20px;
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 700px;
    `;

    const RecipesTitle = styled.p`
        font-family: "Lobster", "Poppins";
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    `;

    const RemoveBtn = styled.button`
        font-size: 25px;
        color: red;
        background: none;
        border: none;
        cursor: pointer;
    `;

    const ShowBtn = styled.button`
        font-size: 25px;
        background: none;
        border: none;
        cursor: pointer;
    `;

    const HideBtn = styled.button`
        font-size: 25px;
        background: none;
        border: none;
        cursor: pointer;
    `;

    return (
        <RecipesList>
            <RecipesTitle
                style={{
                    cursor: "pointer",
                }}
                onClick={() => setSelectedRecipe(recipe)}
            >
                {recipe.title}
            </RecipesTitle>
            <div>
                <RemoveBtn onClick={() => remove(recipe)}>
                    <AiFillDelete />
                </RemoveBtn>
                {isExpanded ? (
                    <HideBtn onClick={toggleAccordion}>
                        <IoIosArrowUp />
                    </HideBtn>
                ) : (
                    <ShowBtn onClick={toggleAccordion}>
                        <IoIosArrowDown />
                    </ShowBtn>
                )}
            </div>
            {isExpanded && (
                <div>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            )}
        </RecipesList>
    );
}

export default Recipe;
