import React from 'react';

import styles from './styles.css';

import FriendsList from './FriendsList';

import {friendsData} from '../../mocks/mockFriends';

export default class SteamChat extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(friendsData);
    return (
      <div className={styles.chat_container}>
        <div style={{flex: "1 1 auto", height: '100%'}}></div>
        <div style={{flex: "1 1 auto", height: '100%'}}></div>
        <FriendsList
          friendsList={friendsData}//{this.props.friendsList}
        />
      </div>
    );
  }
}
