/**
 * Created by root on 17-4-20.
 */
/*
 * 展示组件
 * 功能：如何显示（样式、布局）,从props中获取数据，从props调用回调函数
 */
import React, { Component, PropTypes } from 'react'

class AddTodo extends Component {
    //样式展示和布局
    render() {
        return (
            <div className="row">
                <h2 className="text-center">this is a todolist form </h2>
                <div className="col-md-2">
                    名称：
                </div>
                <div className="col-md-8">
                    <input type='text' ref='input' className="form-control"/>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.handleClick(e)} className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)     //从props调用回调函数
        node.value = ''
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

export default AddTodo
