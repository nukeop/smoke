import React from 'react';

import styles from './styles.css';

import SteamFriend from './SteamFriend';

export default class FriendsList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={styles.friends_list_container}>
        {
          this.props.friendsList.map((el, i) => {
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
