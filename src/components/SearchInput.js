import React, { useState } from 'react'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { addSearchedRecipe } from '@/store/slicers/search'
import { useDispatch } from 'react-redux'

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

function SearchInput() {
  const [searchString, setSearchString] = useState('')
  const dispatch = useDispatch()
  console.log(searchString)

  const handleOnChange = (e) => {
    setSearchString(e.target.value)
  }

  console.log('rendered')
  const handleOnClick = (e) => {
    e.preventDefault()
    dispatch(addSearchedRecipe(searchString))
  }

  return (
    <SearchBar>
      <SearchImg />
      <InputBar
        value={searchString}
        onChange={(e) => handleOnChange(e)}
        placeholder='Search recipes'
      />
      <SearchBtn onClick={(e) => handleOnClick(e)}>Search</SearchBtn>
    </SearchBar>
  )
}

export default SearchInput
