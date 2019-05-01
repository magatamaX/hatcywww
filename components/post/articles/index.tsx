import fw from './../../../styles/fw.scss'
import css from './style.scss'
import Share from './../../../components/common/Share/index'
import moment from 'moment'

const Articles = ({ post } : { post: any }) => (
    <div className={fw.fInner}>
        <article id={post._id} className={css.article}>
            <h3 className={css.title}>{post.title}</h3>
            <p className={css.date}>{moment(post.publishedDate).format('YYYY.MM.DD')}</p>
            {post.image.public_id && (
                <figure className={css.keyImage}>
                    <img src={`https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/c_limit,q_auto,w_800/${post.image.public_id}.${post.image.format}`} alt={post.title} />
                </figure>
            )}
            <div
                className={css.contents}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className={css.snsArea}>
                <p className={css.snsTitle}>この記事をシェアする</p>
                <div className={css.sns}>
                    <Share margin={40} />
                </div>
            </div>
        </article>
    </div>
)

export default Articles;