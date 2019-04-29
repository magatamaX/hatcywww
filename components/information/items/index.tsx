import Link from 'next/link'
import fw from './../../../styles/fw.scss'
import css from './style.scss'

const Items = ({ list } : { list: {[key: string]: string}[] }) => (
    <div className={fw.fInner}>
        <ul className={`${fw.fFlex} ${fw.fFlex_mg20} ${fw.fFlex_mg0_s} ${css.list}`}>
            {list.map(( item, i ) => (
                <li key={i} className={`${fw.fFlex4} ${fw.fFlex12_s} ${css.item}`}>
                    <Link href={item.path}>
                        <a className={css.box}>
                            <figure className={css.image}>
                                <img src={item.img} alt="" />
                            </figure>
                            <p className={css.text}>{item.text}</p>
                            <p className={css.date}>{item.date}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default Items;