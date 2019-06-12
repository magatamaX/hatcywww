import React from 'react';
import App, { Container } from 'next/app';
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Pagetopbutton from '../components/common/Pagetopbutton/index'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

interface Props {
  Component: any,
  pageProps: any,
  reduxStore: any,
  router: any
}

class Hatchy extends App<Props> {

  render () {
    const { Component, pageProps, reduxStore, router } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Header pathname={router.pathname} />
          <Component {...pageProps} />
          <Footer />
          <Pagetopbutton />
        </Provider>
      </Container>
    )
  }

}

export default withReduxStore(Hatchy);