/**
 * Created by yangyangyu on 17-4-20.
 */
/*
 * 入口文件
 */

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './container/App'
import todoApp from './reducers/todoApp'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

