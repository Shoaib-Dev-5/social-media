import { Posts, Users } from '../../Data'
import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'

const Feed = () => {
  return (
    <div className="feed">
       <Share/>
       {
        Posts.map((post)=>{
          return(
            <Post post={post}/>
          )
        })
       }
     </div>
  )
}

export default Feed
