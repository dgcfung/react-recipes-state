# React Recipes Pt 2!

Your task is to:

- Have the Previous and Next buttons change the recipe that is displayed on the page

Here are guided steps:

## Create a Constructor function inside App

Inside of this constructor set the state property of "recipe" to recipes[0] and state property of recipeIndex to 0

## Write methods on the App component to go to the next and prev recipes

Call one recipeNext and the other recipePrev. Then BIND these functions to the App component inside of your constructor.

recipeNext should incread the recipeIndex on state by one, and set recipe to be recipes[this.state.recipeIndex + 1].

recipePrev will do similar.

## attach your functions in JSX

to next and previous buttons using onClick

## Bonus

Modify your recipeNext and recipePrev functions (or conditionally render the buttons) so user can't navigate to recipes that don't exist (ie can't "next" when looking at last recipe in our array)
