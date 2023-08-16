import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { recipe } from "./practice";

import Header from "../../components/Header";
import MyFridge from "@/components/MyFridge";

export default function ShoppingList() {
    return (
        <>
            <Head>
                <title>ShoppingList</title>
            </Head>
            <Header />

            {/* I put this component here for testing.  -Kevin */}
            <MyFridge />

            {/* I'm placing this here for now/michiru */}
            <ItemsToBuy recipe={recipe} />
        </>
    );
}
