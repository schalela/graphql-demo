import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: {
    defaults: {
      count: 0
    }
  },
  fetch
});

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}