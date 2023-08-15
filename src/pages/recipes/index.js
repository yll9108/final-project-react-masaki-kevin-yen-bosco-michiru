import Head from 'next/head'

import Header from '../../components/Header'
import SearchInput from '@/components/SearchInput'

export default function Recipes() {
  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>
      <Header />
      <div>Recipes</div>
      <SearchInput />
    </>
  )
}
