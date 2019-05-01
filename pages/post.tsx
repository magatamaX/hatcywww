import Layout from '../components/Layout/index'
import fetch from 'isomorphic-unfetch'
import Titlebox from '../components/common/Titlebox/index'
import Articles from '../components/post/articles/index'
import Buttons from '../components/post/buttons/index'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import React from 'react'

const Post = ({ currentPost } : { currentPost: any }) => (
  <Layout>
    <section>
      <Titlebox text="お知らせ" engText="Information" />
      <Articles post={currentPost} />
      <Buttons />
    </section>
  </Layout>
)

Post.getInitialProps = async ({ req }:{ req: any }) => {

  // Fetch Current Post
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
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
          content
          publishedDate
          image {
            secure_url
            url
            resource_type
            format
            height
            width
            signature
            version
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