import Link from 'next/link'
import fw from './../../styles/fw.scss'
import css from './style.scss'
import Sns from './../common/Sns/index'
import React, { useState, useEffect } from 'react'

const items = [
  {
    display: "トップ",
    anchor: "#pagetop",
    href: "/",
  },
  {
    display: "お知らせ",
    anchor: "#information",
    href: "/information",
  },
  {
    display: "プロフィール",
    anchor: "#profile",
    href: "/profile",
  },
  {
    display: "ギャラリー",
    anchor: "/gallery",
    href: "/gallery"
  },
  {
    display: "パフォーマンス",
    anchor: "#performance",
    href: "/#performance",
  }
];

const Header = ({ pathname } : { pathname: string }) => {

  const [ showDetail, setShowDetail ] = useState(false)
  useEffect(() => {
    setShowDetail(false)
  }, [pathname])

  return (
    <div className={fw.fw}>
      <header id="header" className={css.header}>
        <div className={css.inner}>
          <div className={css.spHead}>
            <h1 className={css.title}>
              <Link href="/">
                <a><img src="/static/images/header/title.svg" alt="" /></a>
              </Link>
            </h1>
            <div className={css.spToggleArea}>
              <a
                className={`${css.togglebutton} ${showDetail ? css.on : ''}`}
                onClick={() => setShowDetail(!showDetail)}
              >
                <span className={css.first}></span>
                <span className={css.second}></span>
                <span className={css.third}></span>
              </a>
            </div>
          </div>
          <div className={`${css.spContents} ${showDetail ? css.on : ''}`}>
            <nav className={css.nav}>
                { pathname === "/" ? (
                  <ul className={`${css.list} ${fw.fFlex} ${fw.fFlex_mg30} ${fw.fFlex_mg0_s}`}>
                    {items.map((item, index) => (
                      <li key={index} className={`${css.item} ${fw.fFlex_fifth} ${fw.fFlex12_s}`}>
                        <Link href={item.anchor}>
                          <a onClick={() => setShowDetail(!showDetail)} className={`${css.anchor} j-smooth-scroll`}>{item.display}</a>
                        </Link>
                      </li>
                    ))}
                    <li className={`${css.item} ${css.itemSpOnly} ${fw.fFlex_fifth} ${fw.fFlex12_s}`}>
                        <Link href="/contact">
                          <a onClick={() => setShowDetail(!showDetail)} className={`${css.anchor}`}>出演依頼・お問合せ</a>
                        </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className={`${css.list} ${fw.fFlex} ${fw.fFlex_mg30} ${fw.fFlex_mg0_s}`}>
                    {items.map((item, index) => (
                      <li key={index} className={`${css.item} ${fw.fFlex_fifth} ${fw.fFlex12_s}`}>
                        <Link href={item.href}>
                          <a className={`${css.anchor} ${pathname === item.href ? css.current : ''}`}>{item.display}</a>
                        </Link>
                      </li>
                    ))}
                    <li className={`${css.item} ${css.itemSpOnly} ${fw.fFlex_fifth} ${fw.fFlex12_s}`}>
                        <Link href="/contact">
                          <a className={`${css.anchor} ${pathname === "/contact" ? css.current : ''}`}>出演依頼・お問合せ</a>
                        </Link>
                    </li>
                  </ul>
                )}
            </nav>
            <div className={css.sns}>
              <Sns />
            </div>
            <div className={css.contact}>
              <Link href="/contact">
                <a>出演依頼<br />お問合せ</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
 

export default Header