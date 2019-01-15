import React, {Component} from "react"
import './goals.css'
import GoalItem from '../goal_item/goalItem.js'
import PropTypes from 'prop-types'

class Goals extends Component {
   
    render() {
        return this.props.goals.map((goal) => {
            return <GoalItem 
                key={goal.title} 
                goal={goal}
                markComplete={this.props.markComplete}
                removeGoal={this.props.removeGoal}
            />
        });        
    }
}

Goals.propTypes = {
    goals: PropTypes.array.isRequired
}

export default Goals;