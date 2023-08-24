import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToMyRecipes } from '@/store/slicers/myReceips'
import styled from 'styled-components'
import RecipeNotFound from './RecipeNotFound'
import useAuth from '../hooks/useAuth'

//Style
const RecipesListDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const RecipesItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledBtns = styled.div`
  display: flex;
  flex-direction: row;
`
const RecipesListLi = styled.li`
  background-color: #a3b18a;
  border-radius: 10px;
  list-style-type: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 300px;
  box-shadow: 0 1px 5px #344e41;
`

const RecipesTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin: 10px;
`

const AddBtn = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #dad7cd;
  border: none;
  color: black;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const PopupContent = styled.div`
  background-color: #6a994e;
  padding: 20px;
  border-radius: 10px;
  max-width: 550px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`

const CloseButton = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
`

const PopupTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0;
`

const IngredientsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  list-style-type: disc;
  margin: 10px 0;
  padding-left: 20px;
`

const IngredientItem = styled.li`
  margin: 5px 0;
`
const More = styled.button`
  padding: 10px 15px;
  margin: 10px;
  font-size: 15px;
  border-radius: 5px;
  background-color: white;
  border: none;
  color: black;
  cursor: pointer;
`

function RecipesList({ recipes }) {
  const user = useAuth()
  const dispatch = useDispatch()
  const handleOnClick = (recipe) => {
    dispatch(addToMyRecipes(recipe))
  }
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleClosePopup = () => {
    setSelectedRecipe(null)
    setShowPopup(false)
  }

  const handleClick = (recipe) => {
    if (!user) return
    setSelectedRecipe(recipe)
    setShowPopup(true)
  }
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClosePopup()
    }
  }

  return (
    <div>
      {recipes.length === 0 ? (
        <RecipeNotFound />
      ) : (
        <RecipesListDiv>
          {recipes &&
            recipes.map((recipe) => {
              return (
                <RecipesListLi key={recipe.id}>
                  <RecipesItems>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={170}
                      height={170}
                      style={{ borderRadius: '10px' }}
                    />
                    <RecipesTitle>{recipe.title}</RecipesTitle>
                  </RecipesItems>
                  <StyledBtns>
                    <More
                      onClick={() => {
                        handleClick(recipe)
                      }}
                    >
                      More
                    </More>
                    <AddBtn
                      onClick={() => {
                        handleOnClick(recipe)
                      }}
                      disabled={!user}
                    >
                      Add
                    </AddBtn>
                  </StyledBtns>
                </RecipesListLi>
              )
            })}
          {showPopup && selectedRecipe && (
            <Popup onClick={handleOverlayClick}>
              <PopupContent>
                <Image
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  width={200}
                  height={200}
                />
                <PopupTitle>{selectedRecipe.title}</PopupTitle>
                <IngredientsList>
                  <div>
                    <h2>Missing Ingredients:</h2>
                    {selectedRecipe.missedIngredients &&
                      selectedRecipe.missedIngredients.map(
                        (ingredient, index) => (
                          <IngredientItem key={index}>
                            {ingredient.original}
                          </IngredientItem>
                        )
                      )}
                  </div>
                  <div>
                    <h2>Ingredients You Have:</h2>
                    {selectedRecipe.usedIngredients &&
                      selectedRecipe.usedIngredients.map(
                        (ingredient, index) => (
                          <IngredientItem key={index}>
                            {ingredient.original}
                          </IngredientItem>
                        )
                      )}
                  </div>
                </IngredientsList>
                <CloseButton onClick={handleClosePopup}>Close</CloseButton>
              </PopupContent>
            </Popup>
          )}
        </RecipesListDiv>
      )}
    </div>
  )
}

export default RecipesList
