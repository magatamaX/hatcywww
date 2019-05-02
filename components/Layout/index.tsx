import Header from './../Header/index'
import fw from './../../styles/fw.scss'
import React from 'react'

const Layout = ({ children, top = false } : { children: any, top? : boolean }) => (
  <div className={fw.fw}>
    <div className={fw.container}>
      <Header top={top} />
      <main id="contents" className={fw.fMax}>
        <div className={fw.wrapper}>
          {children}
        </div>
      </main>
    </div>
  </div>
)

export default Layout