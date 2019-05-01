import fw from './../../../styles/fw.scss'
import css from './style.scss'

const Historybox = ({ history } : { history: any[] }) => (
    <section id="history">
        <div className={fw.fInner}>
            <table className={css.table}>
                <tbody className={css.tbody}>
                    {history.map((item, i) => (
                        <tr key={i} className={css.tr}>
                            <th className={css.th}>{item.year}</th>
                            <td className={css.td}>
                                <div
                                    className={css.list}
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
)

export default Historybox;