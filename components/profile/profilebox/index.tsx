import css from './style.scss'

const Profilebox = () => (
    <section id="profile">
        <div className={css.profile}>
            <div className={css.box}>
                <div className={css.text}>
                    <h3 className={css.title}>
                        <span className={css.katagaki}>パフォーミングアーティスト</span>
                        <span className={css.name}>徳島はっちー</span>
                        <span className={css.engName}>Tokushima Hatchy</span>
                    </h3>
                    <p className={css.shoukai}>1999年よりジャグリング、2008年より身体表現の向上を求めパントマイムとクラウンを 学ぶ。アートマイムをJIDAI氏、日本舞踊を藤間玉左保氏に師事。<br />2006年デビュー 徳島県内各地の小学校、高齢者施設などを訪問し活動開始。<br />2017年より小児病棟でのパフォーマンス活動を本格的に開始。</p>
                </div>
                <figure className={css.kv}>
                    <img src="/static/images/profile/kv.jpg" alt="" />
                </figure>
            </div>
        </div>
    </section>
)

export default Profilebox;