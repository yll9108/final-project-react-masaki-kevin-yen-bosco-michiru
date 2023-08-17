import React, { useRef, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useAutoCompleteFetch } from '@/hooks/useAutoCompleteFetch'

const MyFridgeSearch = () => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  //why using ref? and not just the normal variable?
  //it's because varibale changes on every render and ref doesn't change on redering
  const preventSearchRef = useRef(false)

  const searchKeyword = useDebounce(input)

  const { autoComplete, setAutoComplete } = useAutoCompleteFetch(
    preventSearchRef,
    searchKeyword
  )

  const handleInputChange = async (e) => {
    //if it's after the selection, the preventSearchRef is true and doesn't fetch, so change it to false
    if (preventSearchRef.current === true) {
      preventSearchRef.current = false
    }
    setInput(e.target.value)
  }

  const handleAddClick = () => {
    if (input) {
      setItems((prevData) => [...prevData, input])
      setInput('')
    }
  }

  const handleDelete = (index) => {
    const ingredientsList = [...items]
    ingredientsList.splice(index, 1)
    setItems(ingredientsList)
  }

  const handleAutoCompleteClick = (item) => {
    //don't want to change the autocomplete when you select, so set it to true
    preventSearchRef.current = true
    setAutoComplete([])
    setInput(item)
  }

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={handleInputChange}
        id='inputIngredients'
        placeholder='Search'
      ></input>

      {input && autoComplete.length > 0 && (
        <>
          {autoComplete.map((item, index) => (
            <button onClick={() => handleAutoCompleteClick(item)} key={index}>
              {item}
            </button>
          ))}
        </>
      )}

      <button onClick={handleAddClick}>Add</button>
      <div>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MyFridgeSearch
