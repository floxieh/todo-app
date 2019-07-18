import React, { Component } from 'react';
import "./Todo.css"

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        })
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }
    
    
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <label htmlFor="task">Editing your task: </label>
                        <input
                            type="text"
                            id="task"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class='fas fa-pen' />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i class='fas fa-trash' />
                        </button>
                    </div>
                </div>
            )
        }
        return result;
    }
}
