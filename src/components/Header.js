import React from "react";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import { login, logout } from "../lib/auth";
import { BiLogIn, BiLogOut } from "react-icons/bi";

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

const LoginImg = styled(BiLogIn)`
    font-size: 30px;
    position: relative;
    top: 6px;
`;

const LogoutBtn = styled.button`
    font-size: 30px;
    font-weight: bold;
    margin: 25px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
`;

const LogoutImg = styled(BiLogOut)`
    font-size: 30px;
    position: relative;
    top: 6px;
`;

function Header() {
    const user = useAuth();

    return (
        <HeaderDiv>
            <CompanyName>FRIDGEFY</CompanyName>
            <HeaderUl>
                <HeaderLi>
                    <Link
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Home
                    </Link>
                </HeaderLi>
                <HeaderLi>
                    <Link
                        href="recipes"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Resipes
                    </Link>
                </HeaderLi>
                <HeaderLi>
                    <Link
                        href="shopping-list"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Shopping List
                    </Link>
                </HeaderLi>
            </HeaderUl>

            {user ? (
                <LogoutBtn onClick={logout}>
                    <LogoutImg />
                    &nbsp;Logout
                </LogoutBtn>
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
