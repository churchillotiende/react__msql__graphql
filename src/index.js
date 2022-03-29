import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';
import  './assets/scss/_base.scss';
import { HttpLink } from 'apollo-link-http';
// apollo-hooks

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache  =  new InMemoryCache()
const httpLink = new HttpLink({
    uri:'http://127.0.0.1:4000/graphql'
  }
)
const client = new ApolloClient(
  {
    cache , 
    link:httpLink
  }
)

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
