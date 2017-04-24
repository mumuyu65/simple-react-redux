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
import App from './container/App'   //需要更新的UI
import todoApp from './reducers/todoApp'  //reducers
let store = createStore(todoApp)   // store保存了应用所有 state 的对象。改变 state 的惟一方法是 dispatch action。你也可以 subscribe 监听 state 的变化，然后更新 UI。

console.log('state is: ' + store.getState());  // state is:

store.subscribe(function () {
    console.log("state change");
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

