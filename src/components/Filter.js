import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//Style
const FilterType = styled.div`
    margin-top: 20px;
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
