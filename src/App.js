import React, { Component } from 'react';

import { Provider } from 'react-redux';
//import postReducer from './reducers/postReducer'
import Posts from './components/Posts'
import PostForm from './components/Postform';


import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <div className="App-intro">
        <PostForm />
        <hr />
        <Posts />
        </div>
      </div>
      </ Provider>
    );
  }
}

export default App;
