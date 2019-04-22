import css from './style.scss'

const Historybox = () => (
    <section id="history">
        <div className={css.fInner}>
            <table className={css.table}>
                <tbody className={css.tbody}>
                    <tr className={css.tr}>
                        <th className={css.th}>2018</th>
                        <td className={css.td}>
                            <ul className={css.list}>
                                <li className={css.item}>カンパニーvivivivi『鼻』出演</li>
                                <li className={css.item}>日本舞踊玉佐保会</li>
                                <li className={css.item}>徳島はっちー単独公演vol.2『求変患者』</li>
                                <li className={css.item}>徳島はっちー単独公演vol.3『引き篭り家族』</li>
                                <li className={css.item}>Canariダンスパフォーマンス『踊らんかなリ』ゲスト出演</li>
                                <li className={css.item}>フィンランド中心に北欧など周遊</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className={css.tr}>
                        <th className={css.th}>2017</th>
                        <td className={css.td}>
                            <ul className={css.list}>
                                <li className={css.item}>徳島はっちー単独公演vol.1『ありしひきたるひ』</li>
                                <li className={css.item}>さくっとパントマイム49出演</li>
                                <li className={css.item}>小児病棟でのパフォーマンス活動が本格的に開始</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className={css.tr}>
                        <th className={css.th}>2016</th>
                        <td className={css.td}>
                            <ul className={css.list}>
                                <li className={css.item}>チャレンジとくしま芸術祭2016</li>
                                <li className={css.item}>大阪パフォーマーライセンス審査合格</li>
                                <li className={css.item}>阿佐谷パールセンタークリスマスショー(以降毎年出演)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </section>
)

export default Historybox;