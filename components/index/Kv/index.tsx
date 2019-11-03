import css from './style.scss'
import Link from 'next/link'

const Kv = ({ isAniKvDone } : { isAniKvDone: boolean }) => (
    <div className={css.kv}>
        <div className={css.inner}>
			<div className={css.event}>
				<Link as="/information/p/11-4" href="/post?slug=11-4">
					<figure><img src="/static/images/chirashi.jpg" alt="島はっちー単独公演vol.4 &amp; 5『銀河鉄道ノ刻』" /></figure>
				</Link>
				<p>11月4日 ご予約受付中！</p>
			</div>
            <p className={`${css.title} ${isAniKvDone ? css.on : ''}`}>
                <img src="/static/images/index/kv/title.png" alt="パフォーミングアーティスト・徳島はっちー" />
            </p>
            <div
                className={css.bg}
                dangerouslySetInnerHTML={ { __html: `<video id="kvVideo" src="/static/video/video.mp4" poster="/static/video/poster.jpg" muted autoplay loop muted playsinline webkit-playsinline></video>`}}
            /> 
            <div className={`${css.scroll} ${isAniKvDone ? css.on : ''}`}><span></span></div>
        </div>
    </div>
)

export default Kv;
