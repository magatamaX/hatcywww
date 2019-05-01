import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Profilebox from '../components/profile/profilebox/index'
import Historybox from '../components/profile/historybox/index'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Profile = ({ error, profile, history } : { error: any, profile: any[], history: any[] }) => {

  const description: string = 'パフォーミングアーティスト・徳島はっちーオフィシャルサイト。1999年よりジャグリング、2008年より身体表現の向上を求めパントマイムとクラウンを学ぶ。アートマイムをJIDAI氏、日本舞踊を藤間玉左保氏に師事。2006年デビュー 徳島県内各地の小学校、高齢者施設などを訪問し活動開始。2017年より小児病棟でのパフォーマンス活動を本格的に開始。'

  return (
    <Layout>
      <Head>
        <title>プロフィール｜パフォーミングアーティスト 徳島はっちー</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島,徳島はっちー" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content="プロフィール｜パフォーミングアーティスト 徳島はっちー" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tokushimahatchy.com/profile" />
        <meta property="og:image" content="https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/v1556743286/og_rqduvi.jpg" />
        <meta property="og:site_name" content="パフォーミングアーティスト 徳島はっちー" />
        <meta property="og:description" content={description} />
      </Head>
      <section>
        <Titlebox text="プロフィール" engText="Profile" />
        { error ? (
          <p>投稿を取得できませんでした。しばらくたってから再度お試しください。</p>
        ) : (
          <React.Fragment>
            <Profilebox profile={profile} />
            <Titlebox text="活動履歴" engText="History" />
            <Historybox history={history} />
          </React.Fragment>
        )}
      </section>
    </Layout>
  )
}

Profile.getInitialProps = async () => {

  // Fetch Profile and Histories
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    fetchOptions: {
      fetch: fetch as any
    }
  });
  const props = await client.query({
    query: gql`
      query Query {
        profile {
          content
        }
        history {
          year
          content
        }
      }
    `,
  })
  .then(result => {
    return {
      profile: result.data.profile,
      history: result.data.history
    }
  })
  .catch(error => {
    return {
      error,
      profile: [],
      history: []
    }
  });

  return {
    ...props
  }
}

export default Profile