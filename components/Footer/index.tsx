import css from './style.scss'
import Sns from './../common/Sns/index'

const Footer = () => (
  <footer id="footer" className={css.footer}>
    <div className={css.inner}>
      <p className={css.copyright}>&copy; tokushimahatchy.com</p>
      <div className={css.sns}>
        <Sns />
      </div>
    </div>
  </footer>
)


export default Footer