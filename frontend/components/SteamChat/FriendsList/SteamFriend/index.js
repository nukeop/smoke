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
    var classes = styles.avatar_container;
    if (this.props.state > 0) {
      classes += " " + styles.avatar_online;
    } else {
      classes += " " + styles.avatar_offline;
    }

    return (
      <div className={styles.friend_container}>
        <div className={classes}>
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
