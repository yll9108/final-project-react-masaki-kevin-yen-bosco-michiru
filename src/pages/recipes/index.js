import Head from 'next/head'
import Header from '../../components/Header'
import SearchInput from '@/components/SearchInput'
import { useState } from 'react'
import RecipesList from '@/components/RecipesList'

//get yen's initial fetched recipe list and set as a initial value for usestate
//it's now empty
export default function Recipes() {
  const [recipes, setRecipes] = useState([])

  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>

      <Header />
      <div>Recipes</div>
      <SearchInput setRecipes={setRecipes} />

      <RecipesList recipes={recipes} />
    </>
  )
}
