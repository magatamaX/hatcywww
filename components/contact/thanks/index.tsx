import fw from './../../../styles/fw.scss';
import css from './style.scss'
import Button from '../../common/Button/index'

const Thanks = () => (
    <div className={fw.fInner}>
        <p className={css.message}>ありがとうございました！</p>
        <p className={css.note}>お問合せを承りました。<br />後日入力いただいたメールアドレスもしくはお電話番号へご連絡いたします。<br />しばらくたっても連絡がない場合は、お手数ですが再度お問合せフォームよりご連絡ください。</p>
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

export default Thanks;