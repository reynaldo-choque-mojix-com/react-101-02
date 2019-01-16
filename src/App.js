import React, { Component } from 'react';
import {BrowserRouter as MyRouter, Route} from 'react-router-dom';

import './App.css';
import Header from './components/layout/header.js'
import Goals from './components/goals/goals.js'
import AddGoal from './components/add_goal/addGoal'
import About from './components/pages/about'
import uuid from 'uuid'

class App extends Component {
  state = {
    goals: [{
      id: uuid.v4(),
      title: 'Learn ReactJs',
      completed: false 
    }, {
      id: uuid.v4(),
      title: 'Become Yellow Topcoder',
      completed: true
    }, {
      id: uuid.v4(),
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

  addNewGoal = (title) => {
    console.log("sent ", title);
    const newGoal = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    this.setState({
      goals: [ ...this.state.goals, newGoal ]
    });
  }

  render() {
    console.log(this.state.goals);
    return (
      <MyRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" 
              render={
                props => {
                  return (
                    <React.Fragment>                    
                      <AddGoal addNewGoal={this.addNewGoal}/>
                      <Goals 
                        goals={this.state.goals} 
                        markComplete={this.markComplete}
                        removeGoal={this.removeGoal}
                      />
                    </React.Fragment>
                )}
              }
            />
            <Route 
              exact path="/about" component={About}
            />           
          </div>
        </div>
      </MyRouter>
    );
  }
}

export default App;
