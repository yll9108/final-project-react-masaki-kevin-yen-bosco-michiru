import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import {
    addSearchedRecipe,
    removeSearchedRecipe,
} from "@/store/slicers/search";
import { useDispatch } from "react-redux";

//Style
const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
`;

const InputBar = styled.input`
    border-radius: 5px;
    font-size: 15px;
    padding: 10px 10px 10px 30px;
    margin-right: 10px;
    border: 1px solid #dad7cd;
    width: 300px;
    ::placeholder {
        color: #dad7cd;
    }
`;

const SearchImg = styled(FaSearch)`
    position: relative;
    top: 11px;
    left: 25px;
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

function SearchInput() {
    const [searchString, setSearchString] = useState("");
    const dispatch = useDispatch();
    console.log(searchString);

    const handleOnChange = (e) => {
        setSearchString(e.target.value);
    };

    const handleOnClick = () => {
        dispatch(addSearchedRecipe(searchString));
    };

    const handleDeleteButtonClick = () => {
        dispatch(removeSearchedRecipe(searchString));
        setSearchString("");
    };

    return (
        <SearchBar>
            <SearchImg />
            <InputBar
                value={searchString}
                onChange={(e) => handleOnChange(e)}
                placeholder="Search recipes"
                autoFocus
            />
            <button type="button" onClick={handleDeleteButtonClick}>
                ✖️
            </button>
            <SearchBtn onClick={(e) => handleOnClick(e)}>Search</SearchBtn>
        </SearchBar>
    );
}

export default SearchInput;
