/**
 * Created by root on 17-4-20.
 */
/*
 * 容器组件
 * 功能：数据获取，状态更新，由react-redux生成，从redux获取state，向redux派发actions
 */
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './../actions/action'

import AddTodo from './../component/AddTodo'

import TodoList from './../component/TodoList'

import Footer from './../component/Footer'

class App extends Component {
    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div className="container">
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))  // 通过dispatch向actions中分配任务
                    } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                    } />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))
                    } />
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)

