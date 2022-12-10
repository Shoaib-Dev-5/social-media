import './Sidebar.css';
import Drawer from '@mui/material/Drawer'
import { AutoStories, Bookmark, Chat, Event, Group, HelpOutline, PlayCircle, Wifi, WorkOutline } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import CloseFriend from '../closeFri/CloseFriend';
import { Users } from '../../Data';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       
            <ul>
                <li>
                    <span className='icon'><Wifi/></span>
                    <span className='text'>Feed</span>
                </li>
                <li>
                    <span className='icon'><Chat/></span>
                    <span className='text'>Chat</span>
                </li>
                <li>
                    <span className='icon'><PlayCircle/></span>
                    <span className='text'>Video</span>
                </li>
                <li>
                    <span className='icon'><Group/></span>
                    <span className='text'>Group</span>
                </li>
                <li>
                    <span className='icon'><Bookmark/></span>
                    <span className='text'>Bookmark</span>
                </li>
                <li>
                    <span className='icon'><HelpOutline/></span>
                    <span className='text'>Question</span>
                </li>
                <li>
                    <span className='icon'><WorkOutline/></span>
                    <span className='text'>Work</span>
                </li>
                <li>
                    <span className='icon'><Event/></span>
                    <span className='text'>Events</span>
                </li>
                <li>
                    <span className='icon'><AutoStories/></span>
                    <span className='text'>Courses</span>
                </li>
            </ul>
            <hr />
            <button className='sidebar-btn'>Show More</button>
                {
                    Users.map((user)=>(
                        <CloseFriend user={user}/>
                    ))
                }
    </div>
  )
}

export default Sidebar
