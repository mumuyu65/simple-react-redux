/**
 * Created by root on 17-4-20.
 */
/*
 * 展示组件
 */
import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{marginBottom:'10px',
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}