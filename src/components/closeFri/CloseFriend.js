import { Avatar } from "@mui/material";
import "./CloseFriend.css";

const CloseFriend = ({user}) => {
  return (
    <div className="avt">
      <Avatar className="av" src={user.profile} />
      <p>{user.username}</p>
    </div>
  );
};

export default CloseFriend;
