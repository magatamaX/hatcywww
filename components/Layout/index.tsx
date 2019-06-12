import fw from './../../styles/fw.scss'
import React from 'react'

const Layout = ({ children } : { children: any }) => (
  <div className={fw.fw}>
    <div className={fw.container}>
      <main id="contents" className={fw.fMax}>
        <div className={fw.wrapper}>
          {children}
        </div>
      </main>
    </div>
  </div>
)

export default Layout