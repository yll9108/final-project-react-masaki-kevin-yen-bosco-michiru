import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { recipe } from "./practice";

import Header from "../../components/Header";

export default function ShoppingList() {
  return (
    <>
      <Head>
        <title>ShoppingList</title>
      </Head>
      <Header />
      {/* I'm placing this here for now/michiru */}
      <ItemsToBuy recipe={recipe} />
    </>
  );
}
