import fw from './../../../styles/fw.scss';
import css from './style.scss'
import Button from '../../common/Button/index'
import React from 'react'
import SimpleReactValidator from 'simple-react-validator'

interface Props {

}
interface State {
    enquiryType: string,
    company: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    finalMessage: boolean
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
            finalMessage: false,

        }

    }

    private validator = new SimpleReactValidator({
        element: (message: string) => <div className={css.validate}>{message}</div>,
        messages: {
            email: '正しいEmailアドレスを入力してください。',
            required: '入力してください。',
            phone: 'ハイフンなしの半角数字で入力してください。',
        }
    })

    handleSubmit(e: any) {

        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');

            this.setState(() => ({
                finalMessage: true
            }))
          } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
          }
    }

    finalMessage() {

    }

    render() {
        return (
            <React.Fragment>
                {this.state.finalMessage && (
                    <div className={css.shield}></div>
                )}
                {this.state.finalMessage && (
                    <div className={css.finalMessage}>
                        <p className={css.kakunin}>送信しますか？</p>
                        <div className={`${fw.fFlex} ${fw.fFlex_mg20} ${fw.fFlex_mg0_s} ${css.kakuninButtons}`}>
                            <div className={`${fw.fFlex6} ${fw.fFlex12_s}`}>
                                <Button
                                    color=""
                                    text="キャンセル"
                                    size="full"
                                    path=""
                                    shadow={true}
                                    onClick={() => {
                                        this.setState(() => ({
                                            finalMessage: false
                                        }))
                                    }}
                                />
                            </div>
                            <div className={`${fw.fFlex6} ${fw.fFlex12_s}`}>
                                <Button
                                    color="yellow"
                                    text="OK"
                                    size="full"
                                    path=""
                                    shadow={true}
                                    onClick={this.handleSubmit.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className={fw.fInner}>
                    <p className={css.lead}>下記お問い合わせフォームよりご送信ください。<span>※</span>は入力必須項目です。</p>
                    <form action="/contact/post" method="post" name="form">
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
                                        {this.validator.message('enquiryType', this.state.enquiryType, 'required')}
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
                                        {this.validator.message('name', this.state.name, 'required')}
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
                                        {this.validator.message('email', this.state.email, 'required|email')}
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
                                        {this.validator.message('phone', this.state.phone, 'phone')}
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
                                        {this.validator.message('message', this.state.message, 'required')}
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
                                onClick={this.handleSubmit.bind(this)}
                            />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}


export default Form;