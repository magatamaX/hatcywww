import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import moment from 'moment'
import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const PhotoGallery = ({ error, photos } : { error: any, photos: any[] }) => {

  const description: string = 'パフォーミングアーティスト・徳島はっちーオフィシャルサイト。活動予定やプロフィールは本サイトをチェック！イベントの様子などが見られる写真ギャラリーです。'

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
        <meta name="keywords" content="徳島はっちー,パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島" />
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
        { photos.length === 0 ? (
          <p>{ error ? '投稿を取得できませんでした。しばらくたってから再度お試しください。' : 'まだ投稿がありません。'}</p>
        ) : (
          <React.Fragment>
            <style>{`
              #photo-gallery {
                min-height: 800px;
                margin-bottom: 120px;
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
              .gallery-photo-footer {
                position: absolute;
                padding: 30px 20px 20px;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 1;
                text-shadow: 1px 1px 3px #000;
              }
              .gallery-photo-footer__caption {
                color: #fff;
                font-size: 16px;
                font-weight: bold;
              }
              .gallery-photo-footer__date {
                color: #fff;
                font-size: 12px;
                margin-top: 10px;
              }
              .gallery-photo-footer__place {
                color: #fff;
                font-size: 12px;
                margin-top: 10px;
              }
              .gallery-photo-footer__place a {
                color: #fff;
              }
              .react-images__view {
                width: 100vw;
              }
              .react-images__pager {
                width: 100vw;
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
                .gallery-photo-footer__caption {
                  font-size: 14px;
                }
                .gallery-photo-footer__date {
                  font-size: 10px;
                  margin-top: 5px;
                }
                .gallery-photo-footer__place {
                  font-size: 10px;
                  margin-top: 5px;
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
                            components={{
                              Footer: ({ currentView, isModal } : { currentView: any, isModal: boolean }) => isModal ? (
                                <div className="gallery-photo-footer">
                                  <p className="gallery-photo-footer__caption">{currentView.title}</p>
                                  {currentView.date && (
                                    <p className="gallery-photo-footer__date">{moment(currentView.date).format('YYYY年M月D日')}</p>
                                  )}
                                  {currentView.place && (
                                    <React.Fragment>
                                      {currentView.placeurl ? (
                                        <p className="gallery-photo-footer__place"><a href={currentView.placeurl} target="_blank">{currentView.place}</a></p>
                                      ) : (
                                        <p className="gallery-photo-footer__place">{currentView.place}</p>
                                      )}
                                    </React.Fragment>
                                  )}
                                </div>
                              ) : null
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
  const client = new ApolloClient({
    // uri: 'https://tokushimahatchy.com/graphql',
    uri: 'http://localhost:3000/graphql',
    fetchOptions: {
      fetch: fetch as any
    }
  });
  const props = await client.query({
    query: gql`
      query Query {
        gallery {
          _id
          key
          title
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
          date
          place
          placeUrl
        }
      }
    `,
  })
  .then(result => {
    return {
      photos: result.data.gallery
        .filter((x: any) => x.image.url !== null )
        .map((x: any) => ({
          src: `https://res.cloudinary.com/tokushima-hatchy-official-site/image/upload/c_limit,q_auto,w_1024,h_1024/${x.image.public_id}.${x.image.format}`,
          title: x.title,
          width: x.image.width,
          height: x.image.height,
          date: x.date,
          place: x.place,
          placeurl: x.placeUrl
        })),
    }
  })
  .catch(error => {
    return {
      error,
      photos: []
    }
  });

  return {
    ...props
  }

}

export default PhotoGallery