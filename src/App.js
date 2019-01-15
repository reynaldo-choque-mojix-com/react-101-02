import React, { Component } from 'react';
import './App.css';
import Goals from './components/goals/goals.js'

class App extends Component {
  state = {
    goals: [{
      id: 1,
      title: 'Learn ReactJs',
      completed: false 
    }, {
      id: 2,
      title: 'Become Yellow Topcoder',
      completed: true
    }, {
      id: 3,
      title: 'Become Red Codeforces',
      completed: false
    }]
  } 

  markComplete = (id) => {
    console.log("hi from App.js", id);
    this.setState({
      goals: this.state.goals.map(
        (goal) => {
          if(goal.id === id)
            goal.completed = !goal.completed;
          return goal;
        }
      )
    });
    console.log("now", this.state.goals);
  }

  removeGoal = (id) => {
    console.log("removing", id);
    this.setState({
      goals: [ ...this.state.goals.filter( 
        goal => goal.id !== id        
      )]
    });
  }

  render() {
    console.log(this.state.goals);
    return (
      <div className="App">
        <Goals 
          goals={this.state.goals} 
          markComplete={this.markComplete}
          removeGoal={this.removeGoal}
        />
      </div>
    );
  }
}

export default App;
