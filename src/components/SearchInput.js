import React, { useState } from "react";
import { axiosInstance } from "@/axios";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";

function SearchInput({ setRecipes }) {
    const [searchString, setSearchString] = useState();

    const handleOnChange = (e) => {
        setSearchString(e.target.value);
    };

    const handleOnClick = async () => {
        await axiosInstance
            .get(
                `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&fillIngredients=true&query=${searchString}&number=12`
            )
            .then((res) => setRecipes(res.data.results))
            .catch((err) => console.log(err));
    };

    //Style
    const SearchBar = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const InputBar = styled.input`
        border-radius: 5px;
        font-size: 15px;
        padding: 10px;
        padding-left: 30px;
        margin-right: 10px;
        border: 1px solid #dad7cd;
        width: 300px;
        ::placeholder {
            color: #dad7cd;
        }
    `;

    const SearchImg = styled(FaSearch)`
        position: absolute;
        left: 528px;
        top: 161px;
        color: #dad7cd;
    `;

    const SearchBtn = styled.button`
        padding: 10px 15px;
        font-size: 15px;
        border-radius: 5px;
        background-color: #dad7cd;
        border: 1px solid #dad7cd;
        color: black;
        cursor: pointer;
    `;

    return (
        <SearchBar>
            <SearchImg />
            <InputBar
                onChange={(e) => handleOnChange(e)}
                placeholder="Search recipes"
                autoFocus
            />
            <SearchBtn onClick={handleOnClick}>Search</SearchBtn>
        </SearchBar>
    );
}

export default SearchInput;
