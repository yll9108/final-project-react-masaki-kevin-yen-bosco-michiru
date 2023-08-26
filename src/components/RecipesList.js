import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToMyRecipes } from '@/store/slicers/myReceips'
import styled from 'styled-components'
import RecipeNotFound from './RecipeNotFound'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import { axiosInstance } from '@/axios'

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
  width: 100%;
  overflow: hidden;
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
  width: 200px;
  box-shadow: 0 1px 5px #344e41;
  @media (max-width: 450px) {
    width: 80vw;
}
`

const RecipesTitle = styled.p`
  height: 17px;
  font-size: 15px;
  margin: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: calc(100% - 20px);
`

const AddBtn = styled.button`
  padding: 10px 15px;
  margin: 0 10px;
  width: 70px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #a7c957;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a7c957;
  padding: 20px;
  border-radius: 10px;
  max-width: 550px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`

const CloseButton = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 15px;
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
  height: 300px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7eab63;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #6a994e;
  }
`

const IngredientItem = styled.li`
  margin: 5px 0;
`
const MoreBtn = styled.button`
  padding: 10px 15px;
  margin: 0 10px;
  width: 70px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #dad7cd;
  border: none;
  color: black;
  cursor: pointer;
`

function RecipesList({ recipes }) {
  const user = useAuth()
  const dispatch = useDispatch()
  const handleOnClick = (recipe) => {
    if (!user) return
    dispatch(addToMyRecipes(recipe))
  }
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleClosePopup = () => {
    setSelectedRecipe(null)
    setShowPopup(false)
  }

  const handleClick = (recipe) => {
    //somehow there's duplicated ingredients from api so filter and get rid of them
    const extendedIngredients = recipe.extendedIngredients
    const ingredientsDictionary = {}
    const noDuplicateIngredients = extendedIngredients
      .map((ingredient) => {
        if (ingredient.name in ingredientsDictionary) {
          return undefined
        }
        ingredientsDictionary[ingredient.name] = 1
        return ingredient
      })
      .filter((v) => typeof v !== 'undefined')
    setSelectedRecipe({
      ...recipe,
      extendedIngredients: noDuplicateIngredients,
    })

    setShowPopup(true)
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClosePopup()
    }
  }

  return (
    <div>
      {recipes?.length === 0 ? (
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
                      width={200}
                      height={200}
                      style={{ borderRadius: '10px' }}
                    />
                    <RecipesTitle>{recipe.title}</RecipesTitle>
                  </RecipesItems>
                  <StyledBtns>
                    <MoreBtn
                      onClick={() => {
                        handleClick(recipe)
                      }}
                    >
                      More
                    </MoreBtn>
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
                  width={250}
                  height={250}
                  style={{ borderRadius: '10px' }}
                />
                <PopupTitle>{selectedRecipe.title}</PopupTitle>
                <IngredientsList>
                  <div>
                    <h2>Ingredients:</h2>
                    {selectedRecipe.extendedIngredients.map(
                      (ingredient, index) => (
                        <IngredientItem key={index}>
                          {ingredient.name}
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
