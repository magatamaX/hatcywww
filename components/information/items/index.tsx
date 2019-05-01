import Link from 'next/link'
import fw from './../../../styles/fw.scss'
import css from './style.scss'
import moment from 'moment'

const Items = ({ list } : { list: {[key: string]: any}[] }) => (
    <div className={fw.fInner}>
        <ul className={`${fw.fFlex} ${fw.fFlex_mg20} ${fw.fFlex_mg0_s} ${css.list}`}>
            {list.map(( item, i ) => (
                <li key={i} className={`${fw.fFlex4} ${fw.fFlex12_s} ${css.item}`}>
                    <Link href={`/information/p/${item.slug}`}>
                        <a className={css.box}>
                            <figure className={css.image}>
                                {item.image.public_id ? (
                                    <img src={`https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/c_lfill,h_600,q_auto,w_800/${item.image.public_id}.${item.image.format}`} alt="" />
                                ) : (
                                    <img src="https://unsplash.it/800/600/?image=1084" alt="" />
                                )}
                            </figure>
                            <p className={css.text}>{item.title}</p>
                            <p className={css.date}>{moment(item.publishedDate).format('YYYY.MM.DD')}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default Items;