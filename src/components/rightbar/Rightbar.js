import styled from "@emotion/styled";
import { CardGiftcard, GifTwoTone } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import "./Right.css";

const Rightbar = () => {
  return (
    <div className="right">
      <div className="right-top">
        <CardGiftcard style={{ margin: "0px 8px" }} />
        <p>
          <b>polo foster</b> and <b>3 other friends </b>have a brithday today
        </p>
      </div>
      <div className="right-center">
        <img src="assets/post/right.jpg" alt="" />
      </div>
      <div className="right-bottom">
        <h4>Online Friend</h4>
        <div className="inner">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                alt="Remy Sharp"
                src="/assets/person/2.jpg"
                style={{
                  width: "22px",
                  height: "22px",
                  border: "2px solid white",
                }}
              />
            }
          >
            <Avatar alt="Travis Howard" src="/assets/person/2.jpg" />
          </Badge>
          <p>Saim sarkar</p>
        </div>
        <div className="inner">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                alt="Remy Sharp"
                src="/assets/person/2.jpg"
                style={{
                  width: "22px",
                  height: "22px",
                  border: "2px solid white",
                }}
              />
            }
          >
            <Avatar alt="Travis Howard" src="/assets/person/2.jpg" />
          </Badge>
          <p>Saim sarkar</p>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
