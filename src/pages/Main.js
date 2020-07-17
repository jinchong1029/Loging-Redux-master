import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import DesktopContainer from '../components/DesktopContainer';
import SidebarMenu from '../components/Sidebar';

const Main = ({ children }) => (
  <div>
    <SidebarMenu></SidebarMenu>
    <DesktopContainer>
      <Segment vertical>
        <Container>
          {children}
        </Container>
      </Segment>
    </DesktopContainer>
  </div>
);

export default Main;
