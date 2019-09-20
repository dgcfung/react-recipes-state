import React, { Component } from 'react';
import './style.css';

class Article extends Component {
  render() {
    return (
      <article className="article">
        <img
          id="food_image"
          src={this.props.foodImg}
          alt=""
          className="img-thumbnail"
        />

        <div id="Ingredients_cont">
          <h1>Ingredients</h1>
          <ul>
            {this.props.ingredients.map((ingredient, index) => {
              return <li key={index}> {ingredient} </li>;
            })}
          </ul>
        </div>
        <h1>Preparation</h1>
        <p> {this.props.preparation} </p>
      </article>
    );
  }
}

export default Article;
