import React from "react";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import Link from "next/link";
import { login, logout } from "../lib/auth";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import HeaderLink from "./HeaderLink";

//Style
const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #a3b18a;
    box-shadow: 0 1px 5px #344e41;
`;

const CompanyName = styled.h1`
    font-size: 60px;
    margin: 25px;
    color: black;
    @media (max-width: 1024px) {
        font-size: 40px;
    }
`;

const HeaderUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
`;

const HeaderLi = styled.li`
    font-size: 25px;
    margin: 25px;
    cursor: pointer;
    @media (max-width: 1024px) {
        font-size: 20px;
        margin: 20px;
    }
`;

const LoginBtn = styled.button`
    font-size: 30px;
    font-weight: bold;
    margin: 25px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
`;

const LoginImg = styled(FiLogIn)`
    font-size: 30px;
    position: relative;
    top: 6px;
`;

const LogOutDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const LogOutTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const LogoutBtn = styled.button`
    font-size: 30px;
    font-weight: bold;
    margin: 25px 25px 25px 0;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
`;

const LogoutImg = styled(FiLogOut)`
    font-size: 30px;
    position: relative;
    top: 3px;
`;

function Header() {
    const user = useAuth();

    return (
        <HeaderDiv>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <CompanyName>FRIDGEFY</CompanyName>
            </Link>
            <HeaderUl>
                <HeaderLi>
                    <HeaderLink href="/">Home</HeaderLink>
                </HeaderLi>
                <HeaderLi>
                    <HeaderLink href="/recipes">Recipes</HeaderLink>
                </HeaderLi>
                <HeaderLi>
                    <HeaderLink href="/shopping-list">Shopping List</HeaderLink>
                </HeaderLi>
            </HeaderUl>

            {user ? (
                <LogOutDiv>
                    <LogOutTitle>{user.displayName}&nbsp;</LogOutTitle>
                    <LogoutBtn onClick={logout}>
                        <LogoutImg />
                    </LogoutBtn>
                </LogOutDiv>
            ) : (
                <LoginBtn onClick={login}>
                    <LoginImg />
                    &nbsp;Login
                </LoginBtn>
            )}
        </HeaderDiv>
    );
}

export default Header;
