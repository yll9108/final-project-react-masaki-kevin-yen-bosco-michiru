import {
    addFilterCuisine,
    addFilterDiet,
    addFilterIntolerance,
} from "@/store/slicers/search";
import React from "react";
import {
    availableCuisines,
    availableDiet,
    availableIntolerances,
} from "@/const/filterContents";
import Filter from "./Filter";
import { styled } from "styled-components";

export default function FilterArea() {
    return (
        <div>
            <Filter
                filterContents={availableCuisines}
                dispatcher={addFilterCuisine}
                reduxState="filterCuisine"
                label="CUISINE"
            />
            <Filter
                filterContents={availableDiet}
                dispatcher={addFilterDiet}
                reduxState="filterDiet"
                label="DIET"
            />
            <Filter
                filterContents={availableIntolerances}
                dispatcher={addFilterIntolerance}
                reduxState="filterIntolerance"
                label="INTOLERANCE"
            />
        </div>
    );
}
