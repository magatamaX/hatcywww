import css from './style.scss'

const Kv = ({ isAniKvDone } : { isAniKvDone: boolean }) => (
    <div className={css.kv}>
        <div className={css.inner}>
            <p className={`${css.title} ${isAniKvDone ? css.on : ''}`}>
                <img src="/static/images/index/kv/title.svg" alt="パフォーミングアーティスト・徳島はっちー" />
            </p>
            <div
                className={css.bg}
                dangerouslySetInnerHTML={ { __html: `<video src="/static/video/video.mp4" poster="/static/video/poster.jpg" muted autoplay loop></video>`}}
            /> 
            <div className={`${css.scroll} ${isAniKvDone ? css.on : ''}`}><span></span></div>
        </div>
    </div>
)

export default Kv;