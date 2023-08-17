import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/axios'

export const useAutoCompleteFetch = (preventSearchRef, searchKeyword) => {
  const [autoComplete, setAutoComplete] = useState([])
  useEffect(() => {
    //this is to prevent from changing the autocomplete when you select(click) one of the autocompletes
    if (preventSearchRef.current === true) return
    axiosInstance
      .get(
        `food/ingredients/autocomplete?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&query=${searchKeyword}&number=5`
      )
      .then((res) => {
        const autoCompleteArr = res.data.map((data) => {
          return data.name
        })
        setAutoComplete(autoCompleteArr)
      })
  }, [searchKeyword])

  return { autoComplete, setAutoComplete }
}
