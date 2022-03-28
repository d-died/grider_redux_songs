import React from 'react'
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'


// the provider is the "initial" config that allows reducers & actions and whatnot to communicate
ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <App />
    </Provider>,
    document.querySelector('#root'))