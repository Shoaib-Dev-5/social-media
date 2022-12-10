import Share from '../components/share/Share'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
import './Profile.css'
import '../components/topbar/Topbar.css'
import '../components/sidebar/Sidebar.css'
import '../components/feed/Feed.css'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'
import Show from '../components/Show'

const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar/>
      <Show/>
      <Topbar/>

     <Feed/>
     <Rightbar/>
    </div>
  )
}

export default Profile
