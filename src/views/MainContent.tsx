import React from 'react';
import MainFooter from '../components/Main/MainFooter';

import MainNavbar from '../components/Main/MainNavbar';
import MainPanel from '../components/Main/MainPanel';

import '../styles/Main/main.css';

interface Props {
  style?: object;
}

const MainContent: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <MainNavbar />
      <MainPanel style={props.style}>{props.children}</MainPanel>
      <MainFooter />
    </React.Fragment>
  );
};

export default MainContent;
