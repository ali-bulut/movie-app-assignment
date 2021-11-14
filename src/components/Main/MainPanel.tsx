import React from 'react';

interface Props {
  style?: object;
}

const MainPanel: React.FC<Props> = (props) => {
  return (
    <div className="main-panel main-panel-width" style={props.style}>
      {props.children}
    </div>
  );
};

export default MainPanel;
