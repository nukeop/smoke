import React from 'react';

import styles from './styles.css';

import SteamFriend from './SteamFriend';

export default class FriendsList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var sortedFriends = this.props.friendsList.sort(function(a, b){
      return b.state-a.state;
    });


    return (
      <div className={styles.friends_list_container}>
        {
          sortedFriends.map((el, i) => {
            return(
            <SteamFriend
              name={el.name}
              id={el.steam_id}
              relationship={el.relationship}
              state={el.state}
              avatar={el.avatar}
            />);
          })
        }
      </div>
    );
  }
}
