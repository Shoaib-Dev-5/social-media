import './Topbar.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import { Mail, Person, Search } from '@mui/icons-material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material'

const Topbar = () => {
  return (
      <AppBar position="fixed" color="primary">
         <div className='topbar'>
         <div className="logo">
            <h3>Sarkar</h3>
        </div>
        <div className="search">
            <Search className='search-icon'/>
            <input placeholder='Search something' />
        </div>
        <div className="right-nav">
            <div className="nav-icon">
                <Person />
                <Mail/>
                <NotificationsActiveIcon/>
            </div>
           <div className="avt">
           <Avatar src='' />
            </div> 
        </div>
    </div>
     </AppBar>
  )
}

export default Topbar
