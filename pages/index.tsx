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
import {
  load, aniReset, aniKv, aniInformation, aniProfile, aniPerformance, showPageTopBtn, hidePageTopBtn
} from '../store'

interface Props {
  list: any[],
  isAniKvDone: boolean,
  isAniInformationDone: boolean,
  isAniProfileDone: boolean,
  isAniPerformanceDone: boolean
}
interface State {
  currentVideo: string,
}

class Top extends React.Component<Props, State> {

  constructor( props: Props ) {
    super(props)

    this.state = {
      currentVideo: props.list[0].snippet.resourceId.videoId
    }
  }

  private smoothScroll = '';
  private kvRef = React.createRef<HTMLDivElement>();
  private informationRef = React.createRef<HTMLDivElement>();
  private profileRef = React.createRef<HTMLDivElement>();
  private performanceRef = React.createRef<HTMLDivElement>();


  static async getInitialProps() {
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems'
    const playlistId = 'PL8Mym-l4uq978vdSETUg4B4VLKoVU2pW-'

    const params: any = new URLSearchParams()
    params.set('part', 'snippet')
    params.set('playlistId', playlistId)
    params.set('maxResults', 20)
    params.set('key', 'AIzaSyAmg-DMiJAYOHX08aDQyy7dylhXvnmXmPo')

    const res = await fetch(url + '?' + params.toString())
    const result = await res.json()

    return { list: result.items }
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
      [this.kvRef, [0.5], this.props['aniKv']],
      [this.informationRef, [0.7], this.props['aniInformation']],
      [this.profileRef, [0.7], this.props['aniProfile']],
      [this.performanceRef, [0.3], this.props['aniPerformance']],
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

  componentDidMount() {

    this.props['aniReset']()
    this.ani()

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

  }

  render() {
    return (
      <Layout top={true}>
        <section id="kv" ref={this.kvRef}>
          <Kv isAniKvDone={this.props.isAniKvDone} />
        </section>
        <section id="information" ref={this.informationRef}>
          <Information isAniInformationDone={this.props.isAniInformationDone} />
        </section>
        <section id="profile" ref={this.profileRef}>
          <Profile isAniProfileDone={this.props.isAniProfileDone} />
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
  load, aniReset, aniKv, aniInformation, aniProfile, aniPerformance, showPageTopBtn, hidePageTopBtn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)