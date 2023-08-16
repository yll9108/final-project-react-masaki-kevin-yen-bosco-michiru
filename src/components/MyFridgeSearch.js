import React, { useRef, useState } from 'react'
import { axiosInstance } from '@/axios'

const MyFridgeSearch = () => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  //   const useDebounce = (value, delay = 500) => {
  //     const [debouncedValue, setDebouncedValue] = useState(value)
  //     const ref = useRef()

  //     useEffect(() => {
  //       ref.current = window.setTimeout(() => setDebouncedValue(value), delay)

  //       return () => {
  //         if (ref.current !== undefined) {
  //           window.clearTimeout(ref.current)
  //         }
  //       }
  //     }, [value, delay])

  //     return debouncedValue
  //   }

  //   const searchKeyword = useDebounce(searchString)

  const handleInputChange = async (e) => {
    setInput(e.target.value)
    const searchKeyword = useDebounce(input)
    await axiosInstance
      .get(
        `food/ingredients/autocomplete?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&query=${input}&number=5`
      )
      .then((res) => {
        console.log(res)
      })
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

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={handleInputChange}
        id='inputIngredients'
        placeholder='Search'
      ></input>
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
