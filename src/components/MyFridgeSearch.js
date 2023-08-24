import React, { useRef, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useAutoCompleteFetch } from "@/hooks/useAutoCompleteFetch";
import { addToFridge } from "@/store/slicers/myFridge";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

//Style
const SreachBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

const SearchImg = styled(FaSearch)`
    position: relative;
    top: 11px;
    left: 25px;
    color: #dad7cd;
`;

const InputBar = styled.input`
    border-radius: 5px;
    font-size: 15px;
    color: black;
    padding: 10px;
    padding-left: 30px;
    margin-right: 10px;
    border: 1px solid #dad7cd;
    width: 140px;
    ::placeholder {
        color: #dad7cd;
    }
`;

const AddButton = styled.button`
    padding: 10px 15px;
    font-size: 15px;
    border-radius: 5px;
    background-color: #dad7cd;
    border: 1px solid #dad7cd;
    color: black;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const AutoCompleteDropdown = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 259px;
    left: 34px;
`;

const AutoCompleteBtn = styled.button`
    width: 183px;
    font-size: 15px;
    padding: 5px;
    margin: 0;
    background: #dad7cd;
    border: 1px solid black;
    cursor: pointer;
`;

const MyFridgeSearch = () => {
    const user = useAuth();
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const items = useSelector((state) => state.fridge.items);

    //why using ref? and not just the normal variable?
    //it's because varibale changes on every render and ref doesn't change on redering
    const preventSearchRef = useRef(false);

    const searchKeyword = useDebounce(input);

    const handleAddClick = () => {
        if (input) {
            if (items.includes(input)) {
                window.alert("This item already exists in the fridge!");
            } else {
                dispatch(addToFridge(input));
                setInput("");
            }
        }
    };

    const { autoComplete, setAutoComplete } = useAutoCompleteFetch(
        preventSearchRef,
        searchKeyword
    );

    const handleInputChange = async (e) => {
        //if it's after the selection, the preventSearchRef is true and doesn't fetch, so change it to false
        if (preventSearchRef.current === true) {
            preventSearchRef.current = false;
        }
        setInput(e.target.value);
    };

    const handleAutoCompleteClick = (item) => {
        //don't want to change the autocomplete when you select, so set it to true
        preventSearchRef.current = true;
        setAutoComplete([]);
        setInput(item);
    };

    return (
        <SreachBar>
            <SearchImg />
            <InputBar
                type="text"
                value={input}
                onChange={handleInputChange}
                id="inputIngredients"
                placeholder="Search ingredients"
                autoFocus
            ></InputBar>

            {input && autoComplete.length > 0 && (
                <AutoCompleteDropdown>
                    {autoComplete.map((item, index) => (
                        <AutoCompleteBtn
                            onClick={() => handleAutoCompleteClick(item)}
                            key={index}
                        >
                            {item}
                        </AutoCompleteBtn>
                    ))}
                </AutoCompleteDropdown>
            )}

            <AddButton onClick={handleAddClick} disabled={!user}>Add</AddButton>
        </SreachBar>
    );
};

export default MyFridgeSearch;
