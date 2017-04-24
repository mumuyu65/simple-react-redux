/**
 * Created by yangyangyu on 17-4-20.
 */
/*
 * This demo is completely show the connections of action,store and reducers
 */
import { createStore } from 'redux'

function count(state={year:2017},action) {
    switch (action.type){
        case 'add':
            return {
                year:state.year + 1
            };
        case 'sub':
            return {
                year:state.year - 1
            };
        default:
            return state;
    }

}

let store = createStore(count);  // store保存了应用所有 state 的对象。改变 state 的惟一方法是 dispatch action。你也可以 subscribe 监听 state 的变化，然后更新 UI。

alert("请在控制台中查看结果");

// store里面的数据发生改变时，触发的回调函数
store.subscribe(function () {
    console.log('the year is: ', store.getState().year);
});


// action: 触发state改变的唯一方法(按照redux的设计思路)
var action1 = { type: 'add' };
var action2 = { type: 'add' };
var action3 = { type: 'sub' };

// 改变store里面的方法
store.dispatch(action1); // 'the year is: 2016
store.dispatch(action2); // 'the year is: 2017
store.dispatch(action3); // 'the year is: 2016

