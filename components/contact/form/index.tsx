import css from './style.scss'
import Button from '../../common/Button/index'

const Form = () => (
    <div className={css.fInner}>
        <form>
            <table className={css.table}>
                <tbody className={css.tbody}>
                    <tr className={css.tr}>
                        <th className={css.th}>お問合せの種類<span className={css.requireIcon}>※</span></th>
                        <td className={css.td}>
                            <div className={css.selectWrapper}>
                                <select className={css.selectbox} name="type">
                                    <option value="">選択してください</option>
                                    <option value="request">お仕事のご依頼</option>
                                    <option value="inquiry">その他のお問合せ</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr className={css.tr}>
                        <th className={css.th}>ご所属（会社名等）</th>
                        <td className={css.td}>
                            <input type="text" name="company" className={css.textbox} />
                        </td>
                    </tr>
                    <tr className={css.tr}>
                        <th className={css.th}>お名前<span className={css.requireIcon}>※</span></th>
                        <td className={css.td}>
                            <input type="text" name="name" className={css.textbox} />
                        </td>
                    </tr>
                    <tr className={css.tr}>
                        <th className={css.th}>メールアドレス<span className={css.requireIcon}>※</span></th>
                        <td className={css.td}>
                            <input type="email" name="email" className={css.textbox} />
                        </td>
                    </tr>
                    <tr className={css.tr}>
                        <th className={css.th}>電話番号</th>
                        <td className={css.td}>
                            <input type="tel" name="tel" className={css.textbox} />
                        </td>
                    </tr>
                    <tr className={css.tr}>
                        <th className={css.th}>お問合せ内容<span className={css.requireIcon}>※</span></th>
                        <td className={css.td}>
                            <textarea className={css.textarea} id="content" name="content" placeholder="お問合せ内容をご記入ください。" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={css.button}>
                <Button
                    color="yellow"
                    text="送信する"
                    size="large"
                    path=""
                    shadow={true}
                    onClick={() => {
                        alert('準備中です。')
                    }}
                />
            </div>
        </form>
    </div>
)

export default Form;