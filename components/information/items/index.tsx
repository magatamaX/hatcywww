import Link from 'next/link'
import css from './style.scss'

const Items = ({ list } : { list: {[key: string]: string}[] }) => (
    <div className={css.fInner}>
        <ul className={`${css.fFlex} ${css.fFlex_mg20} ${css.fFlex_mg0_s} ${css.list}`}>
            {list.map(( item, i ) => (
                <li key={i} className={`${css.fFlex4} ${css.fFlex12_s} ${css.item}`}>
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