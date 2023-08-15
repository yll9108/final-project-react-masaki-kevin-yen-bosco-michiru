import React, { useState } from 'react'
import { axiosInstance } from '@/axios'

function SearchInput() {
  const [searchString, setSearchString] = useState()

  const handleOnChange = (e) => {
    setSearchString(e.target.value)
  }

  const handleOnClick = async () => {
    await axiosInstance
      .get(
        `recipes/complexSearch?apiKey=102dd48d03734af4b56020d99cf44a56&fillIngredients=true&query=${searchString}&number=12`
      )
      .then((res) => res.data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <input onChange={(e) => handleOnChange(e)} />
      <button onClick={handleOnClick}>Search</button>
    </>
  )
}

export default SearchInput
