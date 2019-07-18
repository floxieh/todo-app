import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
             task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createNewTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New todo: </label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}


/*

*/