import 'url-search-params-polyfill'
import Layout from '../components/Layout/index'
import Kv from '../components/index/Kv/index'
import Information from '../components/index/information/index'
import Profile from '../components/index/profile/index'
import Performance from '../components/index/performance/index'
import Contact from '../components/index/contact/index'
import React from 'react'
import fetch from 'isomorphic-unfetch'
import mgnSmoothScroll from 'mgn-smooth-scroll';
import { connect } from 'react-redux'
import { aniReset, aniKv, aniInformation, aniProfile, aniPerformance, showPageTopBtn, hidePageTopBtn } from '../store'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import Head from 'next/head'

interface Props {
  list: any[],
  posts: any[],
  profile: any[],
  isAniKvDone: boolean,
  isAniInformationDone: boolean,
  isAniProfileDone: boolean,
  isAniPerformanceDone: boolean,
  aniKv: Function,
  aniInformation: Function,
  aniProfile: Function,
  aniPerformance: Function,
  aniReset: Function
}
interface State {
  currentVideo: string,
}

class Top extends React.Component<Props, State> {

  constructor( props: Props ) {
    super(props)

    this.state = {
      currentVideo: props.list[0].snippet.resourceId.videoId || ''
    }

    this.kvTitleOn = this.kvTitleOn.bind(this)
  }

  private smoothScroll: any = '';
  private kvVideo: any = null;
  private kvRef = React.createRef<HTMLDivElement>();
  private informationRef = React.createRef<HTMLDivElement>();
  private profileRef = React.createRef<HTMLDivElement>();
  private performanceRef = React.createRef<HTMLDivElement>();


  static async getInitialProps() {

    // Fetch Posts, Profiles and YT API Key
    const client = new ApolloClient({
      uri: 'https://tokushimahatchy.com/graphql',
      fetchOptions: {
        fetch: fetch as any
      }
    });
    const props = await client.query({
      query: gql`
        query Query {
          posts(limit:3) {
            slug
            title
            publishedDate
          }
          profile {
            content
          }
          api {
            name
            key
            playlistId
          }
        }
      `,
    })
    .then(result => {
      return {
        posts: result.data.posts,
        profile: result.data.profile,
        api: result.data.api
      }
    })
    .catch(error => {
      return {
        error,
        posts: [],
        profile: [],
        api: []
      }
    });

    
    // YouTube API
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems'
    const params: any = new URLSearchParams()
    await params.set('part', 'snippet')
    await params.set('maxResults', 20)
    await params.set('key', props.api.filter((api: any) => api.name === "youtube")[0].key)
    await params.set('playlistId', props.api.filter((api: any) => api.name === "youtube")[0].playlistId)

    const ytRes = await fetch(url + '?' + params.toString())
    const ytResult = await ytRes.json()

    return {
      posts: props.posts,
      profile: props.profile,
      list: ytResult.items
    }
  }

  onChangeVideo(id: string): void {

    this.setState(() => {
      return {
        currentVideo: id
      }
    })

  }

  ani(): void {

    const targets: any[] = [
      [this.informationRef, [0.7], this.props.aniInformation],
      [this.profileRef, [0.5], this.props.aniProfile],
      [this.performanceRef, [0.3], this.props.aniPerformance],
    ]

    const setObserver = ( target: any, threshold: number[], func: Function ) => {

      const callback = (entries: any) => {

        entries.forEach((entry: any) => {
            
            if ( entry.isIntersecting ) {

                func()

                // entry.target.idの監視を解除
                observer.unobserve(entry.target);

            }

          });
      }

      const observer = new IntersectionObserver(callback, {
          threshold: threshold
      });

      observer.observe(target)
    }



    targets.forEach((target: any) => {
      setObserver( target[0].current, target[1], target[2] );
    })
  }

  kvTitleOn() {
    if ( !this.props.isAniKvDone ) {
      this.props.aniKv()
    }
  }

  componentDidMount() {

    this.props.aniReset()
    this.ani()

    this.kvVideo = document.getElementById('kvVideo')
    if ( this.kvVideo ) {
      this.kvVideo.addEventListener('canplay', this.kvTitleOn, false)
    }

    this.smoothScroll = new mgnSmoothScroll(
      ".j-smooth-scroll",
      {
          easing: "easeOutQuint",
          ignore: ".ignore",
          posFix: 60,
          blank: true,
      }
    );

    this.smoothScroll['ScrollEnd'] = function(){}

  }

  componentWillUnmount() {

    this.smoothScroll = ''

    if ( this.kvVideo ) {
      this.kvVideo.removeEventListener('canplay', this.kvTitleOn, false)
    }
    this.kvVideo = null

  }

  render() {

    const description: string = 'パフォーミングアーティスト・徳島はっちーオフィシャルサイト。活動予定やプロフィールは本ページをチェック！ 2006年デビュー。以降、地元徳島県内各地の小学校、高齢者施設訪問、イベント出演など活動開始。その後、活動拠点を京都・東京と移し、2017年よりイベント出演と並行して小児病棟でのパフォーマンス活動も本格的に開始。各種イベント出演依頼や、ご質問、ご相談なども承っております。'

    return (
      <Layout>
        <Head>
          <title>パフォーミングアーティスト 徳島はっちー</title>
          <meta name="description" content={description} />
          <meta name="keywords" content="徳島はっちー,パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:title" content="パフォーミングアーティスト 徳島はっちー" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tokushimahatchy.com/" />
          <meta property="og:image" content="https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/v1556743286/og_rqduvi.jpg" />
          <meta property="og:site_name" content="パフォーミングアーティスト 徳島はっちー" />
          <meta property="og:description" content={description} />
        </Head>
        <section id="kv" ref={this.kvRef}>
          <Kv isAniKvDone={this.props.isAniKvDone} />
        </section>
        <section id="information" ref={this.informationRef}>
          <Information
            isAniInformationDone={this.props.isAniInformationDone}
            posts={this.props.posts}
          />
        </section>
        <section id="profile" ref={this.profileRef}>
          <Profile
            isAniProfileDone={this.props.isAniProfileDone}
            profile={this.props.profile}
          />
        </section>
        <section id="performance" ref={this.performanceRef}>
          <Performance
            isAniPerformanceDone={this.props.isAniPerformanceDone}
            list={this.props.list}
            current={this.state.currentVideo}
            onChangeVideo={(id) => this.onChangeVideo(id)}
          />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { ...state }
}
const mapDispatchToProps = {
  aniReset, aniKv, aniInformation, aniProfile, aniPerformance, showPageTopBtn, hidePageTopBtn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)