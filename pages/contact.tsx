import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Form from '../components/contact/form/index'

const Contact = () => {
  return (
    <Layout>
      <section>
        <Titlebox text="出演依頼・お問合せ" engText="Contact" />
        <Form />
      </section>
    </Layout>
  )
}

export default Contact