import Link from 'next/link'
import fw from './../../../styles/fw.scss'
import css from './style.scss'
import Button from './../../common/Button/index'
import moment from 'moment'

const Information = ({ isAniInformationDone, posts } : { isAniInformationDone: boolean, posts: any[] }) => (
    <div className={css.information}>
        <div className={`${fw.fInner} ${css.inner}`}>
            <h2 className={`${css.title} ${isAniInformationDone ? css.on : ''}`}>
                <img src="/static/images/index/information/title.svg" alt="お知らせ" />
            </h2>
            <div className={`${css.fukidashi} ${isAniInformationDone ? css.on : ''}`}>
                <ul className={css.list}>
                    {posts.map((item, i) => (
                        <li key={i} className={css.item}>
                            <Link as={`/information/p/${item.slug}`} href={`/post?slug=${item.slug}`}>
                                <a className={css.linkbox}>
                                    <dl className={css.content}>
                                        <dt className={css.date}>{moment(item.publishedDate).format('YYYY.MM.DD')}</dt>
                                        <dd className={css.text}>
                                            <p>{item.title}</p>
                                        </dd>
                                    </dl>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={css.buttonArea}>
                    <Button
                        color="blue"
                        text="もっと見る"
                        size="medium"
                        path="/information"
                        shadow={true}
                    />
                </div>
            </div>
            <figure className={`${css.hatchy} ${isAniInformationDone ? css.on : ''}`}>
                <img src="/static/images/index/information/yellow_hatchy.png" alt="徳島はっちー" />
            </figure>
            <div className={`${css.pa} ${isAniInformationDone ? css.on : ''}`}>
                <img src="/static/images/index/information/pa.svg" alt="" />
            </div>
        </div>
        {/* <div className={css.bg1}></div>
        <div className={css.bg2}></div> */}
    </div>
)

export default Information;