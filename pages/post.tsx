import Layout from '../components/Layout/index'
import fetch from 'isomorphic-unfetch'
import Titlebox from '../components/common/Titlebox/index'
import Articles from '../components/post/articles/index'
import Buttons from '../components/post/buttons/index'

const articles = [
  {
    id: "article_001",
    title: '単独公演vol.2『求変患者』＠徳島県立文化の森、ご来場いただいた皆様ありがとうございました！！！',
    date: '2018.2.24',
    html: `
      <p><img src="/static/images/post/1.jpg" alt="" /></p>
      <p>ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。</p>
      <p><img src="/static/images/post/2.jpg" alt="" /></p>
      <p>ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。</p>
      <p><img src="/static/images/post/3.jpg" alt="" /></p>
      <p>ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。ここに本文の文章が入ります。</p>
    `,
  }
]

const Post = ()=> (
  <Layout>
    <section>
      <Titlebox text="お知らせ" engText="Information" />
      <Articles list={articles} />
      <Buttons />
    </section>
  </Layout>
)

Post.getInitialProps = async function(context: any) {
  console.log(context)
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(show);
  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post