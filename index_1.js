/**
 * Created by yangyangyu on 17-4-20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

// Store
import { createStore } from 'redux'
import counter from './reducers/countReducer'
const store = createStore(counter)


import  Counter  from './component/counter'

import countActions from './actions/countAction'

//发起 Actions
// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// 发起一系列 action
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value:state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return{
        onIncreaseClick:()=>dispatch(countActions.increaseAction),
        onDecreaseClick:()=>dispatch(countActions.decreaseAction)
    }
}

// Connected Component
const App=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

// 停止监听 state 更新
unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


