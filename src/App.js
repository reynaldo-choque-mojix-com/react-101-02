import React, { Component } from 'react';
import {BrowserRouter as MyRouter, Route} from 'react-router-dom';

import './App.css';
import Header from './components/layout/header.js';
import Goals from './components/goals/goals.js';
import AddGoal from './components/add_goal/addGoal';
import About from './components/pages/about';
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    goals: []
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/reynaldo-choque-mojix-com/react-101-02/development/data/my_goals.json')
      .then(
        res => {
          console.log("get", res.data.data);
          this.setState({
            goals: res.data.data
          });
        }
      )
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
