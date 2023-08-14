import Head from 'next/head'
import ItemsToBuy from '@/components/ItemsToBuy'
import { recipe } from './practice'

export default function ShoppingList() {
  return (
    <>
      <Head>
        <title>ShoppingList</title>
      </Head>
      {/* I'm placing this here for now/michiru */}
      <ItemsToBuy recipe={recipe} />
    </>
  )
}
