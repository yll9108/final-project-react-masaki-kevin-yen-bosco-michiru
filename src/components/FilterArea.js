import {
  addFilterCuisine,
  addFilterDiet,
  addFilterIntolerance,
} from '@/store/slicers/search'
import React from 'react'
import {
  availableCuisines,
  availableDiet,
  availableIntolerances,
} from '@/const/filterContents'
import Filter from './Filter'

export default function FilterArea() {
  return (
    <div>
      <h1>FilterArea</h1>
      <Filter
        filterContents={availableCuisines}
        dispatcher={addFilterCuisine}
        reduxState='filterCuisine'
        label='CUISINE'
      />
      <Filter
        filterContents={availableDiet}
        dispatcher={addFilterDiet}
        reduxState='filterDiet'
        label='DIET'
      />
      <Filter
        filterContents={availableIntolerances}
        dispatcher={addFilterIntolerance}
        reduxState='filterIntolerance'
        label='INTOLERANCE'
      />
    </div>
  )
}
