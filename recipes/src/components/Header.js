import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <cite className="contributors">
          <div>{this.props.byline.name}</div>
          <div>
            <a href={this.props.byline.source} target="_blank">
              Source
            </a>
          </div>
        </cite>
        <ul id="recipe_meta_data" className="list-group">
          <li className="list-group-item">Active: {this.props.activePrep}</li>
          <li className="list-group-item">Total: {this.props.totalPrep}</li>
          <li className="list-group-item">Servings: {this.props.servings}</li>
        </ul>
      </header>
    );
  }
}

export default Header;
