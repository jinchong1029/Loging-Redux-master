import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import { logout } from '../store/actions/auth';
import { connect } from 'react-redux';

class SidebarMenu extends Component {
    constructor(props) {
      super(props);
    }
  
    logout = (e) => {
      e.preventDefault();
      this.props.logout();
    }

    render() {
      return (
        <Menu fixed='left' borderless className='side' vertical>
            <Menu.Item as={Link} to={'/dashboard'} name='dashboard'>
                <Icon name='home' />
                    Dashboard
            </Menu.Item>
            <Menu.Item as={Link} to={'/profile'}>
                <Icon name='user' />
                    Profile
            </Menu.Item>
            <Menu.Item as={Link} to={'/'} onClick={this.logout}>
                <Icon name='sign-out' />
                    Logout
            </Menu.Item>
        </Menu>
      )
    }
  }

const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(SidebarMenu);