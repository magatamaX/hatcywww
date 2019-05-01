import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Form from '../components/contact/form/index'
import Head from 'next/head'

const Contact = () => {

  const description: string = 'パフォーミングアーティスト・徳島はっちーオフィシャルサイト。大道芸・ピエロなど各種イベント出演依頼や、ご質問、ご相談などお気軽にお問い合わせ下さい。'

  return (
    <Layout>
      <Head>
        <title>出演依頼・お問合せ｜パフォーミングアーティスト 徳島はっちー</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島,徳島はっちー" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content="出演依頼・お問合せ｜パフォーミングアーティスト 徳島はっちー" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tokushimahatchy.com/contact" />
        <meta property="og:image" content="https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/v1556743286/og_rqduvi.jpg" />
        <meta property="og:site_name" content="パフォーミングアーティスト 徳島はっちー" />
        <meta property="og:description" content={description} />
      </Head>
      <section>
        <Titlebox text="出演依頼・お問合せ" engText="Contact" />
        <Form />
      </section>
    </Layout>
  )
}

export default Contact