import Link from 'next/link'
import css from './style.scss'
import Button from './../../common/Button/index'

const list = [
    {
        date: "2019.02.09",
        text: "徳島はっちー単独公演vol.3『引き篭り家族』終演～ ご来場下さった皆様、本当に有り難うございました。",
        href: "/p/975"
    },
    {
        date: "2019.02.09",
        text: "徳島はっちー単独公演vol.4『引き篭り家族』終演～ ご来場下さった皆様、本当に有り難うございました。",
        href: ""
    },
    {
        date: "2019.02.09",
        text: "徳島はっちー単独公演vol.3『引き篭り家族』終演～ ご来場下さった皆様、本当に有り難うございました。",
        href: ""
    },
]

const Information = ({ isAniInformationDone } : { isAniInformationDone: boolean }) => (
    <div className={css.information}>
        <div className={`${css.fInner} ${css.inner}`}>
            <h2 className={`${css.title} ${isAniInformationDone ? css.on : ''}`}>
                <img src="/static/images/index/information/title.svg" alt="お知らせ" />
            </h2>
            <div className={`${css.fukidashi} ${isAniInformationDone ? css.on : ''}`}>
                <ul className={css.list}>
                    {list.map((item, i) => (
                        <li key={i} className={css.item}>
                            <Link href={item.href}>
                                <a className={css.linkbox}>
                                    <dl className={css.content}>
                                        <dt className={css.date}>{item.date}</dt>
                                        <dd className={css.text}>
                                            <p>{item.text}</p>
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
        <div className={css.bg1}></div>
        <div className={css.bg2}></div>
    </div>
)

export default Information;