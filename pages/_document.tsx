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
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <script src="https://use.typekit.net/chb4lrd.js" />
          <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" />
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