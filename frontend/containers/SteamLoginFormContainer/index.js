import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

import ContentBox from '../../components/ContentBox';
import SteamLoginForm from '../../components/SteamLoginForm';
import SteamAuthCodeForm from '../../components/SteamAuthCodeForm';

class SteamLoginFormContainer extends React.Component {
  componentDidMount() {
  }

  handleSignIn(username, password, auth_code=null) {
    this.props.actions.steamSignIn(
      this.props.socket,
      username,
      password,
      auth_code
    );
  }

  render() {
    return (
      <ContentBox>
        {
          this.props.authCodeRequired
          ?<SteamAuthCodeForm
            username={this.props.credentials.username}
            password={this.props.credentials.password}
            handleSignIn={this.handleSignIn.bind(this)}
          />
          :<SteamLoginForm
            handleSignIn={this.handleSignIn.bind(this)}
          />
        }

      </ContentBox>
    );
  }
}

function mapStateToProps(state) {
    return {
        socket: state.steam.socket,
        authCodeRequired: state.steam.authCodeRequired,
        credentials: state.steam.credentials
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SteamLoginFormContainer);
