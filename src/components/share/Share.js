import { Collections, EmojiEmotions, LocationCity, Tag } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import './Share.css';

const Share = () => {
  return (
    <div className='share'>
      <div className="share-top">
        <Avatar src='assets/person/1.jpg' />
        <p className='title'>What's in your mind saim</p>
      </div>
      <hr />
      <div className="share-bottom">
        <div className="item">
            <Tag />
            <p className="text">
               Tag
            </p>
        </div>
        <div className="item">
            <LocationCity />
            <p className="text">
                photo or video
            </p>
        </div>
        <div className="item">
            <EmojiEmotions />
            <p className="text">
               Emotions
            </p>
        </div>
        <div className="item">
            <Collections />
            <p className="text">
                photo or video
            </p>
        </div>
        <button className='share-btn'>share</button>
      </div>
    </div>
  )
}

export default Share
