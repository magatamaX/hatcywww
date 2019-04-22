import css from './style.scss'
import Button from './../../common/Button/index'

const introText = '1999年よりジャグリング、2008年より身体表現の向上を求めパントマイムとクラウンを 学ぶ。アートマイムをJIDAI氏、日本舞踊を藤間玉左保氏に師事。2006年デビュー 徳島県内各地の小学校、高齢者施設などを訪問し活動開始。2017年より小児病棟でのパフォーマンス活動を本格的に開始。'

const Profile = ({ isAniProfileDone } : { isAniProfileDone: boolean }) => (
    <div className={css.profile}>
        <div className={`${css.fInner} ${css.inner}`}>
            <h2 className={`${css.title} ${isAniProfileDone ? css.on : ''}`}>
                <img src="/static/images/index/profile/title.svg" alt="プロフィール" />
            </h2>
            <dl className={`${css.box} ${isAniProfileDone ? css.on : ''}`}>
                <dt className={css.namebox}>
                    <span className={css.katagaki}>パフォーミング アーティスト</span>
                    <span className={css.name}>徳島はっちー</span>
                    <span className={css.nameEnglish}>TOKUSHIMA HATCHY</span>
                </dt>
                <dd className={css.intro}>
                    <p>{introText}</p>
                </dd>
                <dd className={css.buttonArea}>
                    <Button
                        color="yellow"
                        text="もっと見る"
                        size="medium"
                        path="/profile"
                        shadow={true}
                    />
                </dd>
            </dl>
            <figure className={`${css.hatchy} ${isAniProfileDone ? css.on : ''}`}>
                <img src="/static/images/index/profile/blue_hatchy.png" alt="徳島はっちー" />
            </figure>
        </div>
        <div className={css.bg1}></div>
        <div className={css.bg2}></div>
    </div>
)

export default Profile;