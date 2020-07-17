import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import { logout } from '../store/actions/auth';
class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { children } = this.props

    return (
      <div className="main-content">
        <div className="content">
          <Container>
            {children}
          </Container>
        </div>
      </div>
    )
  }
}

DesktopContainer.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
  logout: PropTypes.func
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DesktopContainer));