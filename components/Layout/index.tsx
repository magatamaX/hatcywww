import Header from './../Header/index'
import Footer from './../Footer/index'
import css from './style.scss'
import React from 'react'

const Layout = ({ children, top = false } : { children: any, top? : boolean }) => (
  <div className={css.fw}>
    <div className={css.container}>
      <Header top={top} />
      <main id="contents" className={css.fMax}>
        <div className={css.wrapper}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  </div>
)

export default Layout