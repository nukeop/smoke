import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

import ContentBox from '../../components/ContentBox';
import SteamLoginForm from '../../components/SteamLoginForm';

class SteamLoginFormContainer extends React.Component {
    componentDidMount() {
      this.props.socket.emit('json',
      {
        action: 'sign_in',
        username: "asd",
        password: "qwe"
      }
    );
  }

  render() {
    return (
      <ContentBox>
        <SteamLoginForm

        />
      </ContentBox>
    );
  }
}

function mapStateToProps(state) {
    return {
        socket: state.steam.socket,
        authCodeRequired: state.steam.authCodeRequired
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SteamLoginFormContainer);
