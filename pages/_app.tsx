import React from 'react';
import App, { Container } from 'next/app';
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

interface Props {
  Component: any,
  pageProps: any,
  reduxStore: any
}

class Hatchy extends App<Props> {

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }

}

export default withReduxStore(Hatchy);