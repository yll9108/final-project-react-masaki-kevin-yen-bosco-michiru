import React, { useEffect } from 'react'
import { axiosInstance } from '@/axios'
import { useSelector } from 'react-redux'

export const useFetch = (setRecipes) => {
  const myFridgeIngredients = useSelector(
    (state) => state.search.myFridgeIngredients
  ).join(',')
  const searchRecipe = useSelector((state) => state.search.searchRecipe).join(
    ','
  )
  const filterCuisine = useSelector((state) => state.search.filterCuisine).join(
    ','
  )
  const filterDiet = useSelector((state) => state.search.filterDiet).join(',')
  const filterIntolerance = useSelector((state) =>
    state.search.filterIntolerance.join(',')
  )
  useEffect(() => {
    const fetchData = async () => {
      await axiosInstance
        .get(
          `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&fillIngredients=true&query=${searchRecipe}&cuisine=${filterCuisine}&diet=${filterDiet}&intolerances=${filterIntolerance}&includeIngredients=${myFridgeIngredients}&number=5`
        )
        .then((res) => setRecipes(res.data.results))
        .catch((err) => console.log(err))
    }
    fetchData()
  }, [
    myFridgeIngredients,
    searchRecipe,
    filterCuisine,
    filterDiet,
    filterIntolerance,
  ])
}
