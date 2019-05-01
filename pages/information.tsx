import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Items from '../components/information/items'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Information = ({ error, posts } : { error: any, posts: any[] }) => {
  return (
    <Layout>
      <Head>
        <title>お知らせ｜パフォーミングアーティスト 徳島はっちー</title>
      </Head>
      <section>
        <Titlebox text="お知らせ" engText="Information" />
        { error ? (
          <p>投稿を取得できませんでした。しばらくたってから再度お試しください。</p>
        ) : (
          <React.Fragment>
            {!posts.length ? (
              <p>投稿はありません。</p>
            ) : (
              <Items list={posts} />
            )}
          </React.Fragment>
        )}
        
      </section>
    </Layout>
  )
}

Information.getInitialProps = async () => {

    // Fetch Posts
    const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      fetchOptions: {
        fetch: fetch as any
      }
    });
    const props = await client.query({
      query: gql`
        query Query {
          posts {
            slug
            title
            publishedDate
            image {
              public_id
              format
            }
          }
        }
      `,
    })
    .then(result => {
      return {
        posts: result.data.posts,
      }
    })
    .catch(error => {
      return {
        error,
        posts: [],
      }
    });
  
    return {
      ...props
    }
}

export default Information