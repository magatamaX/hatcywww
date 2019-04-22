import css from './style.scss'
import Button from './../../../components/common/Button/index'

const Buttons = () => (
    <div className={css.buttons}>
        <div className={css.fInner}>
            <Button
                color=""
                text="お知らせ一覧"
                size="large"
                path="/information"
                shadow={false}
            />
        </div>
    </div>
)

export default Buttons;