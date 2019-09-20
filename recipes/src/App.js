import React, { Component } from 'react';
import './App.css';
import recipes from './data/recipes';
import Header from './components/Header';
import Article from './components/Article';


class App extends Component {

  // adding a constructor and state with the current recipe index to my application
  constructor(){
    super()
    this.state = {
      recipeIndex: 0
    }
    //binding both of my methods so the key word this inside them refers to the class and not the function
    this.recipePrev = this.recipePrev.bind(this)
    this.recipeNext = this.recipeNext.bind(this)
  }

  recipePrev(){
    //setting up a condition to account for if the index is at 0
    if(this.state.recipeIndex === 0){
      return this.setState({
        recipeIndex: 2
      })
    }
    // if the index is not at 0 then subtract 1 to go back
    return this.setState({
      recipeIndex: this.state.recipeIndex - 1
    })
  }

  recipeNext() {
    //setting up a condition to account for if the index is at recipe length
    if (this.state.recipeIndex === recipes.length -1) {
      return this.setState({
        recipeIndex: 0
      })
    }
    // if the index is not at 0 then add 1 to go forward
    return this.setState({
      recipeIndex: this.state.recipeIndex + 1
    })
  }

  render() {
    //setting recipe to equal the recipes with the index from state
    let recipe = recipes[this.state.recipeIndex]
    return (

      <div className="flex-container">
        <nav className="nav">
          <button onClick = {this.recipePrev} className="btn btn-default">Previous Recipe</button>
          <button onClick = {this.recipeNext} className="btn btn-default">Next Recipe</button>
        </nav>

        <Header
          title={recipe.title}
          byline={recipe.byline}
          activePrep={recipe.activePrep}
          totalPrep={recipe.totalPrep}
          servings={recipe.servings}
        />

        <Article
          foodImg={recipe.img}
          ingredients={recipe.ingredients}
          preparation={recipe.preparation}
        />

        <footer>Copyright &copy; General Assembly</footer>
      </div>
    );
  }
}

export default App;
