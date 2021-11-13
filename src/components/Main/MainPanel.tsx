import React from 'react';

interface Props {
  style?: object;
}

const MainPanel: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        ...{ paddingLeft: 22, marginTop: 120, paddingRight: 22 },
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default MainPanel;
