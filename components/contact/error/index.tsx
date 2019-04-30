import fw from './../../../styles/fw.scss';
import css from './style.scss'
import Button from '../../common/Button/index'

const Error = () => (
    <div className={fw.fInner}>
        <p className={css.message}>送信に失敗しました。</p>
        <p className={css.note}>恐れ入りますが、しばらくたってから再度お試しください。</p>
        <div className={css.button}>
            <Button
                color="yellow"
                text="トップへ戻る"
                size="large"
                path="/"
                shadow={true}
            />
        </div>
    </div>
)

export default Error;