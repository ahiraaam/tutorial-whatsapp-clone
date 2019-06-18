import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import { mockApolloClient } from './test-helpers';
import ReactDOM from 'react-dom';
import App from './App';
import { any } from 'prop-types';

it('renders without crashing', () => {
  const client = mockApolloClient(any);
  const div = document.createElement('div');
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    div
  );
});
