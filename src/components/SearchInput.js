import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { addSearchedRecipe, removeSearchedRecipe } from '@/store/slicers/search'
import { useDispatch } from 'react-redux'

//Style
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
    @media (max-width: 450px) {
        width: 80vw;
        align-items:center;
        margin-bottom:1rem;
    }
`

const InputBar = styled.input`
  border-radius: 5px;
  font-size: 15px;
  padding: 10px 10px 10px 30px;
  border: 1px solid #dad7cd;
  width: 300px;
  ::placeholder {
    color: #dad7cd;
  }
    @media (max-width: 450px) {
        width: 50vw;
        margin-top:1vh;
    }
`

const SearchImg = styled(FaSearch)`
  position: relative;
  top: 11px;
  left: 25px;
  color: #dad7cd;
`

const SearchBtn = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #dad7cd;
  border: 1px solid #dad7cd;
  color: black;
  cursor: pointer;
    @media (max-width: 450px) {
        width: 15vw;
        margin-top:1vh;
        height:4vh;
        padding: 1vh 1vw 1vh 1vw;
    }
`

const ClearBtn = styled.button`
  position: relative;
  top: 0;
  right: 30px;
  font-size: 20px;
  background: none;
  border: none;
  color: grey;
  font-weight: 300;
  cursor: pointer;
    @media (max-width: 450px) {
        width: 20vw;
        margin-top:1vh;
    }
`

function SearchInput() {
  const [searchString, setSearchString] = useState('')
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    setSearchString(e.target.value)
  }

  const handleOnClick = () => {
    dispatch(addSearchedRecipe(searchString))
  }

  const handleDeleteButtonClick = () => {
    dispatch(removeSearchedRecipe(searchString))
    setSearchString('')
  }

  return (
    <SearchBar>
      <SearchImg />
      <InputBar
        value={searchString}
        onChange={(e) => handleOnChange(e)}
        placeholder='Search recipes'
        autoFocus
      />
      <ClearBtn type='button' onClick={handleDeleteButtonClick}>
        ×
      </ClearBtn>
      <SearchBtn onClick={(e) => handleOnClick(e)}>Search</SearchBtn>
    </SearchBar>
  )
}

export default SearchInput
