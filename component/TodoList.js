/**
 * Created by root on 17-4-20.
 */
/*
 * 展示组件
 */
import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <div className="row" style={{marginTop:'10px'}}>
                <div className="col-md-2">
                    列表：
                </div>
                <ul className="list-unstyled col-md-10" >
                    {this.props.todos.map((todo, index) =>
                        <Todo {...todo}
                              key={index}
                              onClick={() => this.props.onTodoClick(index)} />
                    )}
                </ul>
            </div>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}
