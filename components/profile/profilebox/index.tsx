import css from './style.scss'

const Profilebox = ({ profile }: { profile: any[] }) => (
    <section id="profile">
        <div className={css.profile}>
            <div className={css.box}>
                <div className={css.text}>
                    <h3 className={css.title}>
                        <span className={css.katagaki}>パフォーミングアーティスト</span>
                        <span className={css.name}>徳島はっちー</span>
                        <span className={css.engName}>Tokushima Hatchy</span>
                    </h3>
                    <div
                        className={css.shoukai}
                        dangerouslySetInnerHTML={{__html: profile[0] ? profile[0].content : ''}}
                    />
                </div>
                <figure className={css.kv}>
                    <img src="/static/images/profile/kv.jpg" alt="" />
                </figure>
            </div>
        </div>
    </section>
)

export default Profilebox;