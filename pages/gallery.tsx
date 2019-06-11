import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'

// import ApolloClient from 'apollo-boost'
// import gql from 'graphql-tag'
// import React from 'react'
// import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const PhotoGallery = ({ error, photos } : { error: any, photos: any[] }) => {

  const description: string = 'パフォーミングアーティスト・徳島はっちーオフィシャルサイト。活動予定やプロフィールは本ページをチェック！ 2006年デビュー。以降、地元徳島県内各地の小学校、高齢者施設訪問、イベント出演など活動開始。その後、活動拠点を京都・東京と移し、2017年よりイベント出演と並行して小児病棟でのパフォーマンス活動も本格的に開始。各種イベント出演依頼や、ご質問、ご相談なども承っております。'

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (_: any, obj: any) => {
    setCurrentImage(obj.index);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <Head>
        <title>ギャラリー｜パフォーミングアーティスト 徳島はっちー</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島,徳島はっちー" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content="プロフィール｜パフォーミングアーティスト 徳島はっちー" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tokushimahatchy.com/gallery" />
        <meta property="og:image" content="https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/v1556743286/og_rqduvi.jpg" />
        <meta property="og:site_name" content="パフォーミングアーティスト 徳島はっちー" />
        <meta property="og:description" content={description} />
        <style dangerouslySetInnerHTML={{__html: `body { padding-right: 0 !important;}`}} />
      </Head>
      <section>
        <Titlebox text="ギャラリー" engText="Gallery" />
        { error ? (
          <p>投稿を取得できませんでした。しばらくたってから再度お試しください。</p>
        ) : (
          <React.Fragment>
            <style>{`
              #photo-gallery {
                min-height: 800px;
                margin-bottom: 60px;
              }
              #photo-gallery .gallery-photo {
                position: relative;
                overflow: hidden;
                cursor: pointer;
              }
              #photo-gallery .gallery-photo img {
                height: inherit;
              }
              #photo-gallery .gallery-photo .gallery-photo__caption {
                position: absolute;
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                bottom: 0;
                left: 0;
                color: #fff;
                padding: 10px;
                line-height: 1.4;
                font-size: 12px;
                -webkit-transform: translateY(100%);
                -moz-transform: translateY(100%);
                -ms-transform: translateY(100%);
                -o-transform: translateY(100%);
                transform: translateY(100%);
                transition: transform .2s linear;
              }
              #photo-gallery .gallery-photo:hover .gallery-photo__caption {
                -webkit-transform: translateY(0%);
                -moz-transform: translateY(0%);
                -ms-transform: translateY(0%);
                -o-transform: translateY(0%);
                transform: translateY(0%);
              }
              @media screen and (max-width: 768px) {
                #photo-gallery {
                  min-height: 100vh;
                  margin-bottom: 15vh;
                }
                #photo-gallery .gallery-photo .gallery-photo__caption {
                  font-size: 10px;
                  padding: 6px;
                  -webkit-transform: translateY(0%);
                  -moz-transform: translateY(0%);
                  -ms-transform: translateY(0%);
                  -o-transform: translateY(0%);
                  transform: translateY(0%);
                }
              }
            `}</style>
            <div id="photo-gallery">
                <Gallery
                  photos={photos}
                  onClick={openLightbox}
                  targetRowHeight={(containerWidth: number) => {
                      if (containerWidth <= 600) return 150;
                      return 300
                  }}
                  limitNodeSearch={(containerWidth: number) => {
                    if (containerWidth <= 600) return 2;
                    return 6
                  }}
                  renderImage={({
                    index,
                    onClick,
                    photo,
                    margin
                  } : {
                    index: any,
                    onClick: any,
                    photo: any,
                    margin: any,
                    direction: any,
                    top: any,
                    left: any
                  }) => (
                    <figure
                      style={{ margin, height: photo.height, width: photo.width }}
                      className="gallery-photo"
                    >
                      <img
                        alt={photo.title}
                        style={{ display: `block` }}
                        {...photo}
                        onClick={e => onClick(e, { index, photo })}
                      />
                      <p className="gallery-photo__caption">{photo.title}</p>
                    </figure>
                  )}
                  direction="row"
                />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal
                        onClose={closeLightbox}
                        styles={{
                            blanket: (base: any) => ({
                                ...base,
                                zIndex: 10000,
                            }),
                            positioner: (base: any) => ({
                                ...base,
                                zIndex: 10001,
                            })
                      }}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            styles={{
                              footer: (base: any) => ({
                                ...base,
                                opacity: 1,
                                transform: 'none'
                              }),
                              footerCount: (base: any) => ({
                                ...base,
                                display: 'none'
                              })
                            }}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </div>
          </React.Fragment>
        )}
      </section>
    </Layout>
  )
}

PhotoGallery.getInitialProps = async () => {

  // Fetch Profile and Histories
//   const client = new ApolloClient({
//     uri: 'https://tokushimahatchy.com/graphql',
//     fetchOptions: {
//       fetch: fetch as any
//     }
//   });
//   const props = await client.query({
//     query: gql`
//       query Query {
//         profile {
//           content
//         }
//         history {
//           year
//           content
//         }
//       }
//     `,
//   })
//   .then(result => {
//     return {
//       profile: result.data.profile,
//       history: result.data.history
//     }
//   })
//   .catch(error => {
//     return {
//       error,
//       profile: [],
//       history: []
//     }
//   });

//   return {
//     ...props
//   }
const photos = await [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      title: "これはタイトルですよ。",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      title: "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      title: "短いタイトル",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      title: "あほみたいな",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      title: "ボケみたいな",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      title: "これはタイトルですよ。これはタイトルですよ。",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      title: "これはタイトルすよ。",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      title: "これはルですよ。",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      title: "これよ。",
      width: 4,
      height: 3
    }
  ]

  return {
    //   error: {},
      photos
  }
  
}

export default PhotoGallery