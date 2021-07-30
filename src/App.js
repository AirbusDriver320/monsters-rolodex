import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

// CLASS COMPONENT - need internal State (state inside itself) and access a Lifecycle method (componentDidMount)

class App extends Component {
  constructor() {
    super();  // value of this is passed to all ARROW functions inside Component
    this.state = {
      monsters: [], // Start with empty array
      searchField: ''
    };
  }

  // Make an API request when first starting and then fill the monsters array with the data.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Convert the response to JSON
      .then(users => this.setState({ monsters: users }))    // setState monsters to users
  }
// handleChange outside render function otherwise it causes a loop!
// this refers to the same this in Component because handleChange is an arrow function which bind to value of this where created.
handleChange = e => {
  this.setState({ searchField: e.target.value });
};

  render() {
    const { monsters, searchField } = this.state;
    // re-render filteredMonsters whenever searchField changes!
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder="search monsters now"
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
      // Pass monsters on the the props of card-list component
    );
  }
}

export default App;
