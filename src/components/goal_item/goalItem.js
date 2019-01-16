import React, { Component } from 'react';
import './goalItem.css';
import PropTypes from 'prop-types'

class GoalItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '1px',
            fontWeight: 'bold',
            borderBottom: '2px dotted #ccc',
            textDecoration: this.props.goal.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const {id, title, completed} = this.props.goal;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}
                        checked={completed}
                    />
                    {title}
                    <button 
                        style={btnStyle}
                        onClick={this.props.removeGoal.bind(this, id) }
                    > X </button>
                </p>
            </div>
        );
    }
}

GoalItem.propTypes = {
    goal: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    margin: '2px'
}
export default GoalItem;