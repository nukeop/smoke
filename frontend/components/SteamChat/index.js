import React from 'react';

import styles from './styles.css';

import FriendsList from './FriendsList';

export default class SteamChat extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={styles.chat_container}>
        <div style={{flex: "1 1 auto", height: '100%'}}></div>
        <div style={{flex: "1 1 auto", height: '100%'}}></div>
        <FriendsList
          friendsList={this.props.friendsList}
        />
      </div>
    );
  }
}
