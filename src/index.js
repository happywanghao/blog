import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/atelier-seaside-dark.css'; //代码语法高亮
import './main.css';
import './post.css';
import {Provider} from 'react-redux'
import App from './App.js'
import store from './redux/store.js'
ReactDOM.render(
        <Router>
          <Provider store={store}>
              <Route component={App}/>
          </Provider>
        </Router>,
      document.getElementById('root'));
