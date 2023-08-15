import Head from "next/head";
import Header from "../components/Header";
import Recipes from "./recipes";
import ShoppingList from "./shopping-list";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Recipes />
      <ShoppingList />
    </>
  );
}
