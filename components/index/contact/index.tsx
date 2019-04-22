import css from './style.scss'
import Button from './../../common/Button/index'

const Contact = () => (
    <div className={css.contact}>
        <div className={css.titlebox}>
            <p className={css.engTitle}>CONTACT</p>
            <h2 className={css.title}>お問い合わせ</h2>
        </div>
        <div className={css.contactbox}>
            <div className={css.fInner}>
                <p>大道芸・ピエロなど各種イベント出演依頼や、ご質問、ご相談など<br className={css.br} />こちらからお気軽にお問い合わせ下さい。</p>
                <div className={css.buttonArea}>
                    <Button
                        color="yellow"
                        text="お問い合わせ"
                        size="large"
                        path="/contact"
                        shadow={false}
                    />
                </div>
            </div>
        </div>
        <div className={css.bg1}></div>
        <div className={css.bg3}></div>
    </div>
)

export default Contact;