# Fridgefy

Welcome to Fridgefy!
It is a web app that allows you to store your recipes and ingredients that you have in a fridge.
Recipes can be filtered by ingredients, cuisine, diet and intolerances.

## Dates

 - Aug 11, 2023 - Project Kickoff
 - Aug 28, 2023 - Project Presentation

## Features

### All users

- [ ] Search for recipes with filters (cuisine, diet and intolerances). Add all supported values to the filters. You can find it in the API documentation.

### Only registered users

- [ ] Add ingredients to the fridge
- [ ] Add recipes to the wish list
- [ ] Make shopping list based on selected recipes
- [ ] Search for recipes based on ingredients in the fridge. Add a checkbox in the filter area to show only recipes with ingredients in the fridge.

## Pages

- [ ] Home / Hero page
- [ ] All Recipes page with search and filters
- [ ] Wish list page with shopping list

## API

- https://spoonacular.com/food-api

## Database

- Fridge items and selected recipes are stored in the Local Storage of the browser.

## Authentication

- By Google (Firebase Authentication)

## Frontend

- React / Next
- Bootstrap / Styled Components / TailwindCSS
- React Router
- Redux or Context API + useReducer

## Design Resources

* A wireframe is provided within the repository.

![wireframe](/CICCC-React-Final.png)

* You can refer for design and UI components from:
  - Dribbble
  - Wix
  - Template monster

## Rules of GIT

- Never code on master
- Merge conflicts WILL HAPPEN. It's a natural part of developing. You are not doing anything wrong. There are ways of minimizing conflicts but you can never get rid of them.

## Team Workflow

### Format

- SCRUM meetings: 5-10 minutes per day
- Yesterday I was working on ...
- Today I am working on ...
- I am stuck on / I am moving slow on..., would anyone want to pair with me to help?

### Dividing Tasks

- Design
- Frontend
- Backend (API)
- Pair programming (Take turns)

### Understand your data

- What is the data?
- What data do you need?
- What type of data do you need?
- How to store the data?
- Create the data flow

search ingredient -> on click event -> send data to local storage -> get data from local storage -> display updated data

### Set up your environment

- One member of the team will create the Frontend App
- Delete all the unnecessary files
- Create the firebase project
- Enable the firebase authentication
- Create .env file at the root of the project with the firebase project credentials and add it to the .gitignore file (.env config)[https://create-react-app.dev/docs/adding-custom-environment-variables/]
- **MAKE SURE YOU DON'T PUSH THE .ENV FILE TO GITHUB**
- Push the initial commit to the repository
- Every member should clone the repository
- Every member should create their own branch

### Create the design

- Think about the UI and how would you split into components
- Create the wireframes
- Create the HTML structure
- Create the mockups
- Create the style guide

### Create the frontend

- Create the components
- Create the event handlers

### Create the State management

- Are you using Redux or Context API?
- How many reducers do you need?
- Create the reducers
- Create the reducer initial state
- Create the reducer functions(actions)
- Create the service files
- Create the service functions(get/post/delete)
