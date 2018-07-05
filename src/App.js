import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './store/reducers/'

import AppRouter from './routers/appRouter/'

import './App.scss';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


class App extends Component {

  componentWillMount () {
    console.log(config.name)
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
