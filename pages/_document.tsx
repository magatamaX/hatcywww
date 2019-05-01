// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="description" content="パフォーミングアーティスト・徳島はっちーオフィシャルサイト。1999年よりジャグリング、2008年より身体表現の向上を求めパントマイムとクラウンを学ぶ。アートマイムをJIDAI氏、日本舞踊を藤間玉左保氏に師事。2006年デビュー 徳島県内各地の小学校、高齢者施設などを訪問し活動開始。2017年より小児病棟でのパフォーマンス活動を本格的に開始。" />
          <meta name="keywords" content="パントマイム,ジャグリング,クラウン,アートマイム,大道芸,ピエロ,ダンス,パフォーマンス,徳島,はっちー" />
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <script src="https://use.typekit.net/chb4lrd.js" />
          <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" />
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/slick-fix.css" />
        </Head>
        <body id="pagetop">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;