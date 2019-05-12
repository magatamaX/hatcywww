import fw from './../../../styles/fw.scss'
import css from './style.scss'

import Facebook from './../../svg/facebook.svg'
import Instagram from './../../svg/instagram.svg'
import Youtube from './../../svg/youtube.svg'

const Sns = ({ margin } : { margin?: number }) => {

    const mg: string = margin ? `fFlex_mg${margin}` : `fFlex_mg20`;

    return (
        <ul className={`${css.sns} ${fw.fFlex} ${fw[mg]}`}>
            <li className={fw.fFlex4}>
                <a href="https://www.facebook.com/%E5%BE%B3%E5%B3%B6%E3%81%AF%E3%81%A3%E3%81%A1%E3%83%BC-204934336900923/" target="_blank" className={`${css.link} ${css.facebook}`}><Facebook /></a>
            </li>
            <li className={fw.fFlex4}>
                <a href="https://www.instagram.com/tokushimahatchy/" target="_blank" className={`${css.link} ${css.instagram}`}><Instagram /></a>
            </li>
            <li className={fw.fFlex4}>
                <a href="https://www.youtube.com/channel/UCCmRnjk4fhP7zapyIDjEOpQ" target="_blank" className={`${css.link} ${css.youtube}`}><Youtube /></a>
            </li>
        </ul>
    )
}

export default Sns