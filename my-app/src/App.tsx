import React from 'react';
import './App.css';
import { LoginPage } from './pages/login';
import { ApolloProvider } from '@apollo/client';
import { client } from './data/graphql/client'

function App() {
  return (
    <ApolloProvider client={ client }>
      <div className="app">
        <LoginPage/>
      </div>
    </ApolloProvider>
  );
}

export default App;
