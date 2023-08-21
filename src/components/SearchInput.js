import React, { useState } from 'react'
import { axiosInstance } from '@/axios'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { addSearchedRecipe } from '@/store/slicers/search'
import { useDispatch } from 'react-redux'

function SearchInput() {
  const [searchString, setSearchString] = useState()
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    setSearchString(e.target.value)
  }

  const handleOnClick = () => {
    dispatch(addSearchedRecipe(searchString))
    // await axiosInstance
    //     .get(
    //         `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&fillIngredients=true&query=${searchString}&number=12`
    //     )
    //     .then((res) => setRecipes(res.data.results))
    //     .catch((err) => console.log(err));
  }

  //Style
  const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
  `

  const InputBar = styled.input`
    border-radius: 5px;
    font-size: 15px;
    padding: 10px;
    padding-left: 30px;
    margin: 0 10px;
    border: 1px solid;
    width: 300px;
  `

  const SearchImg = styled(FaSearch)`
    position: relative;
    left: 35px;
    top: 10.5px;
    color: gray;
  `

  const SearchBtn = styled.button`
    padding: 10px 15px;
    font-size: 15px;
    border-radius: 5px;
    background-color: black;
    border: none;
    color: white;
    cursor: pointer;
  `

  return (
    <SearchBar>
      <SearchImg />
      <InputBar
        onChange={(e) => handleOnChange(e)}
        placeholder='Search recipes'
      />
      <SearchBtn onClick={handleOnClick}>Search</SearchBtn>
    </SearchBar>
  )
}

export default SearchInput
