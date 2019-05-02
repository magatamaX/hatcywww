import fw from './../../../styles/fw.scss'
import css from './style.scss'
import Button from './../../common/Button/index'

const Profile = ({ isAniProfileDone, profile } : { isAniProfileDone: boolean, profile: any[] }) => (
    <div className={css.profile}>
        <div className={`${fw.fInner} ${css.inner}`}>
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
                    <div dangerouslySetInnerHTML={{__html: profile[0] ? profile[0].content : ''}} />
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
        {/* <div className={css.bg1}></div>
        <div className={css.bg2}></div> */}
    </div>
)

export default Profile;