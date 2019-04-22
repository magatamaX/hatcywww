import css from './style.scss'
import Sns from './../../../components/common/Sns/index'

const Articles = ({ list } : { list: {[key: string]: string}[] }) => (
    <div className={css.fInner}>
        {list.map((item, i) => (
            <article key={i} id={item.id} className={css.article}>
                <h3 className={css.title}>{item.title}</h3>
                <p className={css.date}>{item.date}</p>
                <div
                    className={css.contents}
                    dangerouslySetInnerHTML={{ __html: item.html }}
                />
                <div className={css.snsArea}>
                    <p className={css.snsTitle}>この記事をシェアする</p>
                    <div className={css.sns}>
                        <Sns margin={40} />
                    </div>
                </div>
            </article>
        ))}
    </div>
)

export default Articles;