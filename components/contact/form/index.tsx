import fw from './../../../styles/fw.scss';
import css from './style.scss'
import Button from '../../common/Button/index'
import React from 'react'

interface Props {

}
interface State {
    enquiryType: string,
    company: string,
    name: string,
    email: string,
    phone: string,
    message: string,
}

class Form extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            enquiryType: '',
            company: '',
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    }

    update(e: any) {
        console.log(e.target.name, e.target.value)
    }

    render() {
        return (
            <div className={fw.fInner}>
                <form action="/contact/post" method="post">
                    <table className={css.table}>
                        <tbody className={css.tbody}>
                            <tr className={css.tr}>
                                <th className={css.th}>お問合せの種類<span className={css.requireIcon}>※</span></th>
                                <td className={css.td}>
                                    <div className={css.selectWrapper}>
                                        <select
                                            className={css.selectbox}
                                            name="enquiryType"
                                            value={this.state.enquiryType}
                                            onChange={(e) => {
                                                const value = Array.from(e.target.options).filter((option) => option.selected === true )[0].value
                                                this.setState(() => ({
                                                    enquiryType: value
                                                }))
                                            }}
                                        >
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
                                    <input
                                        type="text"
                                        name="company"
                                        className={css.textbox}
                                        value={this.state.company}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            this.setState(() => ({
                                                company: value
                                            }))
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr className={css.tr}>
                                <th className={css.th}>お名前<span className={css.requireIcon}>※</span></th>
                                <td className={css.td}>
                                    <input
                                        type="text"
                                        name="name"
                                        className={css.textbox}
                                        value={this.state.name}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            this.setState(() => ({
                                                name: value
                                            }))
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr className={css.tr}>
                                <th className={css.th}>メールアドレス<span className={css.requireIcon}>※</span></th>
                                <td className={css.td}>
                                    <input
                                        type="email"
                                        name="email"
                                        className={css.textbox}
                                        value={this.state.email}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            this.setState(() => ({
                                                email: value
                                            }))
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr className={css.tr}>
                                <th className={css.th}>電話番号</th>
                                <td className={css.td}>
                                    <input
                                        type="phone"
                                        name="phone"
                                        className={css.textbox}
                                        value={this.state.phone}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            this.setState(() => ({
                                                phone: value
                                            }))
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr className={css.tr}>
                                <th className={css.th}>お問合せ内容<span className={css.requireIcon}>※</span></th>
                                <td className={css.td}>
                                    <textarea
                                        className={css.textarea}
                                        id="message"
                                        name="message"
                                        placeholder="お問合せ内容をご記入ください。"
                                        value={this.state.message}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            this.setState(() => ({
                                                message: value
                                            }))
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">あああああああ</button>
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
    }
}


export default Form;