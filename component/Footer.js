/**
 * Created by root on 17-4-20.
 */
/*
 * 展示组件
 */
import React, { Component, PropTypes } from 'react'

class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name
        }

        return (
            <a href='#' onClick={e => {
                e.preventDefault()
                this.props.onFilterChange(filter)
            }} style={{marginRight:'10px'}}>
                {name}
            </a>
        )
    }

    render() {
        return (
            <div className="row" style={{marginTop:'10px'}}>
                <div className="col-md-2">
                    过滤条件：
                </div>
                <div className="col-md-10">
                    Show:
                    {' '}
                    {this.renderFilter('SHOW_ALL', 'All')}
                    {', '}
                    {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                    {', '}
                    {this.renderFilter('SHOW_ACTIVE', 'Active')}
                </div>.
            </div>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

export default Footer