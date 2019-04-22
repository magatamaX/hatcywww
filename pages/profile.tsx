import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Profilebox from '../components/profile/profilebox/index'
import Historybox from '../components/profile/historybox/index'

export default function Profile() {
  return (
    <Layout>
      <section>
        <Titlebox text="プロフィール" engText="Profile" />
        <Profilebox />
        <Titlebox text="活動履歴" engText="History" />
        <Historybox />
      </section>
    </Layout>
  )
}