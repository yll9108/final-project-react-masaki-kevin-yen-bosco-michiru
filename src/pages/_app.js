import { Provider, useDispatch } from 'react-redux'
import store from '@/store/store'
import { useEffect } from 'react'
import { initialRecipesSet } from '@/store/slicers/myReceips'
import { initialFridgeItemsSet } from '@/store/slicers/myFridge'
import 'src/pages/reset.css'
import Head from 'next/head'
import useAuth from "../hooks/useAuth";


//set localstorage items to redux when page is refreshed
const LocalStorageProvider = ({ children }) => {
  const user = useAuth();
  const dispatch = useDispatch()
  useEffect(() => {
    if (!user) {
      dispatch(initialRecipesSet([]));
      dispatch(initialFridgeItemsSet([]));
      return;
    }
    const existingRecipesList = JSON.parse(
      localStorage.getItem('recipes') ?? '[]'
    )
    const existingFridgeItemsList = JSON.parse(
      localStorage.getItem('fridgeItem') ?? '[]'
    )
    dispatch(initialRecipesSet(existingRecipesList))
    dispatch(initialFridgeItemsSet(existingFridgeItemsList))
  }, [dispatch, user])

  return <>{children}</>
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LocalStorageProvider>
        <Head>
          <link rel='icon' sizes='16x16' href='/chef.png' />
        </Head>
        <Component {...pageProps} />
      </LocalStorageProvider>
    </Provider>
  )
}
