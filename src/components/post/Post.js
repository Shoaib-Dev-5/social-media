import { Favorite, HeartBroken, LeakRemove, MoreVert } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { Users } from '../../Data'
import './Post.css'

const Post = ({post}) => {
  return (
    <div className='post'>
     <div className="post-top">
        <div className="top-left">
            <Avatar src={Users.filter((val)=>val.id===post.userId)[0].profile} className='profile' />
            <h6>{Users.filter((val)=>val.id===post.userId)[0].username}</h6>
            <p>{post.date}</p>
        </div>
        <MoreVert/>
     </div>
     <div className="post-center">
        <p className="desc">
            {post?.desc}
        </p>
        <img src={post.photo} alt="post" />
     </div>
     <div className="post-bottom">
    <div className="bottom-left">
        <Favorite />
        <HeartBroken/>
        <p>{post.like}</p>
    </div>
    <p>{post.comment}</p>
     </div>
    </div>
  )
}

export default Post
