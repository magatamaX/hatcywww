import fw from './../../../styles/fw.scss'
import css from './style.scss'
import React from 'react'

import Facebook from './../../svg/facebook.svg'
import LINE from './../../svg/line.svg'
import Twitter from './../../svg/twitter.svg'

interface Props {
    margin?: number
}

class Share extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    openFacebook() {
        if ( !window ) {
            return
        }

        window.open(
            'http://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href),'sharewindow','width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=!'
        )
    }

    openLINE() {

        if ( !window ) {
            return
        }

        window.open('http://line.me/R/msg/text/?'+encodeURIComponent(document.title)+'%20'+encodeURIComponent(location.href),'sharewindow','width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=!')
    }

    openTwitter() {
        if ( !window ) {
            return
        }

        window.open('http://twitter.com/share?text='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href),'sharewindow','width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=!')

    }

    render() {

        const mg: string = this.props.margin ? `fFlex_mg${this.props.margin}` : `fFlex_mg20`;

        return (
            <ul className={`${css.sns} ${fw.fFlex} ${fw[mg]}`}>
                <li className={fw.fFlex4}>
                    <a onClick={() => this.openFacebook()} className={`${css.link} ${css.facebook}`}><Facebook /></a>
                </li>
                <li className={fw.fFlex4}>
                    <a onClick={() => this.openLINE()} className={`${css.link} ${css.line}`}><LINE /></a>
                </li>
                <li className={fw.fFlex4}>
                    <a onClick={() => this.openTwitter()} className={`${css.link} ${css.twitter}`}><Twitter /></a>
                </li>
            </ul>
        )
    }


}

export default Share