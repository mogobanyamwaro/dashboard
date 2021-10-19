import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">FainaAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/c0.125.1140.1140a/s526x395/236058395_1057410914796677_4432392837850619659_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHxdvLOiU_5PvTQypqkmZKueXUppnsRBRF5dSmmexEFEW_8WuHOLBSFzr827iFYm7EOzJiB9mXIUBkSre7l56Fh&_nc_ohc=cBKhE8LizTIAX_DOde1&_nc_ht=scontent.fnbo8-1.fna&oh=b67ae22ed4162ca50abf93b4f5a7fb60&oe=6152837D"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
