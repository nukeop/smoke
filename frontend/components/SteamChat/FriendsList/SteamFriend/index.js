import React from 'react';

import styles from './styles.css';

const classNames = require('classnames');

export default class SteamFriend extends React.Component {
  constructor(props){
    super(props);
  }

  stateToString(state){
    switch (state) {
      case 0:
      return "Offline";
      case 1:
      return "Online";
      case 2:
      return "Busy";
      case 3:
      return "Away";
      case 4:
      return "Snooze";
      case 5:
      return "Looking to trade"
      case 6:
      return "Looking to play"
      default:
      return "Unknown"
    }

  }

  render() {

    const ac = styles.avatar_container;
    const aonline = styles.avatar_online;
    const aoffline = styles.avatar_offline;

    const avatarClass = classNames({
      ac: true,
      aonline: this.props.state>0,
      aoffline: this.props.state==0
      });

    return (
      <div className={styles.friend_container}>
        <div className={avatarClass}>
          <img src={this.props.avatar} />
        </div>
        <div className={styles.info_container}>
          <div>{this.props.name}</div>
          <div>{this.stateToString(this.props.state)}</div>
        </div>
      </div>
    );
  }
}
