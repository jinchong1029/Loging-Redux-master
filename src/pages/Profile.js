import React from 'react';
import Main from './Main';
import {connect} from "react-redux"
import { Header, Icon, Label, Segment } from 'semantic-ui-react'
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.user.profile.email,
      password: props.user.profile.password,
    };
  }

  render() {
    return (
      <Main>
        <Header size='large'>
          <Icon size='large' className='user'></Icon>
          Profile Page
        </Header>
        <Segment>
          <Label size="huge">
            <Icon className='mail'> E-mail : {this.state.email}</Icon>
          </Label>
        </Segment>
        <Segment>
          <Label size="huge">
            <Icon className='lock'> Password : {this.state.password}</Icon>
          </Label>
        </Segment>
      </Main>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
