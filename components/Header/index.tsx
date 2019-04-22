import Link from 'next/link'
import css from './style.scss'
import Sns from './../common/Sns/index'
import React from 'react'

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
    display: "パフォーマンス",
    anchor: "#performance",
    href: "/#performance",
  }
];

interface Props {
  top: boolean,
}
interface State {
  showDetail: boolean,
}

class Header extends React.Component<Props, State> {

  constructor( props: Props ) {
    super(props)

    this.state = {
      showDetail: false,
    }
  }

  render () {
    return (
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
                className={`${css.togglebutton} ${this.state.showDetail ? css.on : ''}`}
                onClick={() => this.setState((state) => ({ showDetail: !state.showDetail }))}
              >
                <span className={css.first}></span>
                <span className={css.second}></span>
                <span className={css.third}></span>
              </a>
            </div>
          </div>
          <div className={`${css.spContents} ${this.state.showDetail ? css.on : ''}`}>
            <nav>
                { this.props.top ? (
                  <ul className={`${css.list} ${css.fFlex} ${css.fFlex_mg30} ${css.fFlex_mg0_s}`}>
                    {items.map((item, index) => (
                      <li key={index} className={`${css.item} ${css.fFlex3} ${css.fFlex12_s}`}>
                        <Link href={item.anchor}>
                          <a onClick={() => this.setState((state) => ({ showDetail: !state.showDetail }))} className={`${css.anchor} j-smooth-scroll`}>{item.display}</a>
                        </Link>
                      </li>
                    ))}
                    <li className={`${css.item} ${css.itemSpOnly} ${css.fFlex3} ${css.fFlex12_s}`}>
                        <Link href="/contact">
                          <a onClick={() => this.setState((state) => ({ showDetail: !state.showDetail }))} className={`${css.anchor}`}>出演依頼・お問合せ</a>
                        </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className={`${css.list} ${css.fFlex} ${css.fFlex_mg30} ${css.fFlex_mg0_s}`}>
                    {items.map((item, index) => (
                      <li key={index} className={`${css.item} ${css.fFlex3} ${css.fFlex12_s}`}>
                        <Link href={item.href}>
                          <a className={`${css.anchor}`}>{item.display}</a>
                        </Link>
                      </li>
                    ))}
                    <li className={`${css.item} ${css.itemSpOnly} ${css.fFlex3} ${css.fFlex12_s}`}>
                        <Link href="/contact">
                          <a className={`${css.anchor}`}>出演依頼・お問合せ</a>
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
    )
  }


}
 

export default Header