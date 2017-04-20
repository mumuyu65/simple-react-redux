/**
 * Created by yangyangyu on 17-4-20.
 */
// React component
import React, { Component, PropTypes } from 'react'

class Counter extends Component{
    render(){
        const { value, onIncreaseClick,onDecreaseClick } = this.props
        return(
            <div className="container">
                <p>{value}</p>
                <ul className="list-inline">
                    <li><button className="btn btn-primary" onClick={onIncreaseClick}>increase</button></li>
                    <li><button className="btn btn-danger" onClick={onDecreaseClick}>decrease</button></li>
                </ul>
            </div>
        )
    }
}

Counter.propTypes = {   //data and function is required
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick:PropTypes.func.isRequired
}

export default Counter
