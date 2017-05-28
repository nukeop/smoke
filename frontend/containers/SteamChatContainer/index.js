import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

import SteamChat from '../../components/SteamChat';

class SteamChatContainer extends React.Component {

  render() {
    return (
      <SteamChat
        friendsList={this.props.friendsList}
      />
    );
  }
}

  function mapStateToProps(state) {
      return {
          friendsList: state.steam.friendsList
      }
  }

  function mapDispatchToProps(dispatch) {
      return {
          actions: bindActionCreators(Actions, dispatch)
      };
  }


  export default connect(mapStateToProps, mapDispatchToProps)(SteamChatContainer);
