<<<<<<< HEAD
import Head from "next/head";

import Header from "../components/Header";
=======
import Head from 'next/head'
import Recipes from './recipes'
import ShoppingList from './shopping-list'
>>>>>>> main

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
<<<<<<< HEAD
      <Header />
      <div>Home</div>
=======
      <Recipes />
      <ShoppingList />
>>>>>>> main
    </>
  );
}
