import fw from './../../../styles/fw.scss';
// import css from './style.scss'
import Button from '../../common/Button/index'

const Thanks = () => (
    <div className={fw.fInner}>
        <p>ありがとうございました！</p>
        {/* <p>{show.toString()}</p> */}
        <Button
            color="yellow"
            text="トップへ戻る"
            size="large"
            path="/"
            shadow={true}
        />

    </div>
)

export default Thanks;