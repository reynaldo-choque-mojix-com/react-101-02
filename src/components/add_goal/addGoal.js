import React from 'react'
import './addGoal.css'

export class AddGoal extends React.Component {
    state = {
        title: ''
    }

    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitGoal = (event) => {
        console.log('submit from here', event);
        event.preventDefault();
        this.props.addNewGoal(this.state.title);
        this.setState({
            title: ''
        });
    }

    render() {
        return(
            <form 
                style={{ display: 'flex' }}
                onSubmit={this.onSubmitGoal}
            >
                
                <input 
                    type="text"
                    name="title"
                    style={{ flex: '10'}}
                    placeholder="Add a new goal ..."
                    value={this.state.title}
                    onChange={this.onChangeText}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="submit-btn"
                    style={{flex: 1}}
                />
            </form>
        );
    }
} 

export default AddGoal;