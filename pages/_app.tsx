import React from 'react';
import App, { Container } from 'next/app';
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Pagetopbutton from '../components/common/Pagetopbutton/index'

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
          <Pagetopbutton />
        </Provider>
      </Container>
    )
  }

}

export default withReduxStore(Hatchy);