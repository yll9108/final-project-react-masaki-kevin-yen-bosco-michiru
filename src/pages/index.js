import Head from "next/head";
import Header from "../components/Header";
import { styled } from "styled-components";
import Link from "next/link";
import { HiCursorClick } from "react-icons/hi";

export default function Home() {
    //Style
    const HomePage = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url("/homePageImg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100vh;
        width: 100vw;
        /* opacity: 0.7; */
    `;

    const HomePageDiv = styled.div`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const HomePageContents = styled.div`
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 600px;
    `;

    const HomePageQuote = styled.h1`
        font-size: 60px;
        font-weight: bold;
        color: white;
        margin-bottom: 20px;
    `;

    const StartBtn = styled.button`
        padding: 10px 15px;
        font-size: 25px;
        border-radius: 20px;
        background-color: white;
        border: none;
        color: black;
        cursor: pointer;
        width: 250px;
        height: 60px;
    `;

    const EnterImg = styled(HiCursorClick)`
        font-size: 25px;
        position: relative;
        left: 2px;
        top: 3px;
    `;

    return (
        <HomePage>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <HomePageDiv>
                <HomePageContents>
                    <HomePageQuote>
                        Recipes capture moments,
                        <br />
                        ingredients capture hearts.
                    </HomePageQuote>
                    <Link href="recipes" style={{ width: "250px" }}>
                        <StartBtn>
                            GET STARTED&nbsp;
                            <EnterImg />
                        </StartBtn>
                    </Link>
                </HomePageContents>
            </HomePageDiv>
        </HomePage>
    );
}
