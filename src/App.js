import React, { Component } from 'react';
import './App.css';
import BooKList from './containers/book-list';
import BookDetail from './containers/book_detail';

import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import * as screenActions from './redux/actions/screenActions';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(rootReducer);
const store = createStoreWithMiddleware(rootReducer);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <BooKList/>
            <BookDetail/>
          </header>
        </div>
      </Provider>
      
    );
  }
}


export default App;
