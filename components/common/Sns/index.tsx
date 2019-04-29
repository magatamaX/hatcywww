import Link from 'next/link'
import fw from './../../../styles/fw.scss'
import css from './style.scss'

import Facebook from './../../svg/facebook.svg'
import Instagram from './../../svg/instagram.svg'
import Twitter from './../../svg/twitter.svg'

const Sns = ({ margin } : { margin?: number }) => {

    const mg: string = margin ? `fFlex_mg${margin}` : `fFlex_mg20`;

    return (
        <ul className={`${css.sns} ${fw.fFlex} ${fw[mg]}`}>
            <li className={fw.fFlex4}>
                <Link href="">
                    <a className={`${css.link} ${css.facebook}`}><Facebook /></a>
                </Link>
            </li>
            <li className={fw.fFlex4}>
                <Link href="">
                    <a className={`${css.link} ${css.instagram}`}><Instagram /></a>
                </Link>
            </li>
            <li className={fw.fFlex4}>
                <Link href="">
                    <a className={`${css.link} ${css.twitter}`}><Twitter /></a>
                </Link>
            </li>
        </ul>
    )
}

export default Sns