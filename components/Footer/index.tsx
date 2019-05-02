import css from './style.scss'
import Sns from './../common/Sns/index'
import fw from './../../styles/fw.scss'

const Footer = () => (
  <div className={fw.fw}>
    <footer id="footer" className={css.footer}>
      <div className={css.inner}>
        <p className={css.copyright}>&copy; tokushimahatchy.com</p>
        <div className={css.sns}>
          <Sns />
        </div>
      </div>
    </footer>
  </div>
)


export default Footer