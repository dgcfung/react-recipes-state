import React, { Component } from 'react';
import './App.css';
import recipes from './data/recipes';
import Header from './components/Header';
import Article from './components/Article';

const recipe = recipes[0];

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <nav className="nav">
          <button className="btn btn-default">Previous Recipe</button>
          <button className="btn btn-default">Next Recipe</button>
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
