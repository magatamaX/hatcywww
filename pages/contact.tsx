import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Form from '../components/contact/form/index'
import ThanksMessage from '../components/contact/thanks/index'

const Contact = ({ contactFormPosted }: { contactFormPosted?: boolean }) => {
  return (
    <Layout>
      <section>
        <Titlebox text="出演依頼・お問合せ" engText="Contact" />
        { contactFormPosted ? (
          <ThanksMessage />
        ) : (
          <Form />
        )}
      </section>
    </Layout>
  )
}

Contact.getInitialProps = async function(context: any) {

  console.log(context.query.body, context.query.contactFormPosted)

  const query = await context.query

  return {
    body: query.body || null,
    contactFormPosted: query.contactFormPosted || false
  }
}

export default Contact