import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Profilebox from '../components/profile/profilebox/index'
import Historybox from '../components/profile/historybox/index'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import React from 'react'
import fetch from 'isomorphic-unfetch'

const Profile = ({ error, profile, history } : { error: any, profile: any[], history: any[] }) => {
  return (
    <Layout>
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