import Layout from '../components/Layout/index'
import fetch from 'isomorphic-unfetch'
import Titlebox from '../components/common/Titlebox/index'
import Articles from '../components/post/articles/index'
import Buttons from '../components/post/buttons/index'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import React from 'react'
import Head from 'next/head'

const Post = ({ currentPost } : { currentPost: any }) => {

  const title: string = currentPost.title
    ? `${currentPost.title}｜お知らせ｜パフォーミングアーティスト 徳島はっちー`
    : `お知らせ｜パフォーミングアーティスト 徳島はっちー`

  const description: string = currentPost.brief
    ? currentPost.brief
    : 'パフォーミングアーティスト・徳島はっちーオフィシャルサイト。1999年よりジャグリング、2008年より身体表現の向上を求めパントマイムとクラウンを学ぶ。アートマイムをJIDAI氏、日本舞踊を藤間玉左保氏に師事。2006年デビュー 徳島県内各地の小学校、高齢者施設などを訪問し活動開始。2017年より小児病棟でのパフォーマンス活動を本格的に開始。'

  const keywords: string = currentPost.keywords.length > 0
    ? `${currentPost.keywords.reduce((a: string, c: string) => a + c + ',', '')}パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島,徳島はっちー`
    : `パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島,徳島はっちー`

  const ogUrl: string = currentPost.slug
    ? `https://tokushimahatchy.com/information/p/${currentPost.slug}`
    : `https://tokushimahatchy.com/information`

  const ogImage: string = currentPost.image.public_id
    ? `https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/c_fill,h_630,q_60,w_1200/${currentPost.image.public_id}.${currentPost.image.format}`
    : `https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/v1556743286/og_rqduvi.jpg`

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="パフォーミングアーティスト 徳島はっちー" />
        <meta property="og:description" content={description} />
      </Head>
      <section>
        <Titlebox text="お知らせ" engText="Information" />
        <Articles post={currentPost} />
        <Buttons />
      </section>
    </Layout>
  )
}

Post.getInitialProps = async ({ req }:{ req: any }) => {

  // Fetch Current Post
  const client = new ApolloClient({
    uri: 'http://54.65.9.7/graphql',
    fetchOptions: {
      fetch: fetch as any
    }
  });
  const props = await client.query({
    query: gql`
      query Query {
        currentPost(slug:"${req.params.slug}") {
          _id
          slug
          title
          state
          author
          keywords
          brief
          content
          publishedDate
          image {
            format
            public_id
          }
        }
      }
    `,
  })
  .then(result => {
    return {
      currentPost: result.data.currentPost
    }
  })
  .catch(error => {
    return {
      error,
      currentPost: {}
    }
  });

  return {
    ...props
  }
}

export default Post