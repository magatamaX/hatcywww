import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Form from '../components/contact/form/index'
import Head from 'next/head'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>出演依頼・お問合せ｜パフォーミングアーティスト 徳島はっちー</title>
      </Head>
      <section>
        <Titlebox text="出演依頼・お問合せ" engText="Contact" />
        <Form />
      </section>
    </Layout>
  )
}

export default Contact