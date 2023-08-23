import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//Style
const FilterType = styled.div`
    background-color: #a3b18a;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 1px 5px #344e41;
`;

const FilterTypeTytle = styled.h3`
    font-size: 30px;
    margin-bottom: 5px;
`;

const FilterCheck = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
`;

const FilterLabel = styled.label`
    margin: 0 5px;
`;

function Filter({ filterContents, dispatcher, reduxState, label }) {
    const dispatch = useDispatch();
    const storedSearchedItems = useSelector(
        (state) => state.search[reduxState]
    );

    const handleOnChange = (item) => {
        dispatch(dispatcher(item));
    };

    return (
        <FilterType>
            <FilterTypeTytle>{label}</FilterTypeTytle>
            <FilterCheck>
                {filterContents.map((item) => (
                    <FilterLabel key={item}>
                        <input
                            type="checkbox"
                            value={item}
                            checked={storedSearchedItems.includes(item)}
                            onChange={() => handleOnChange(item)}
                        />
                        {item}
                    </FilterLabel>
                ))}
            </FilterCheck>
        </FilterType>
    );
}

export default Filter;
