import css from './style.scss'

const Titlebox = ({ text, engText } : { text: string, engText: string }) => (
    <div className={css.titlebox}>
        <h2 className={css.wrap}>
            <span className={css.eng}>{engText}</span>
            <span className={css.jpn}>{text}</span>
        </h2>
    </div>
)

export default Titlebox