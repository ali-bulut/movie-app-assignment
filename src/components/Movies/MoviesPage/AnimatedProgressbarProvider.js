import React from 'react';
import { Animate } from 'react-move';
import PropTypes from 'prop-types';

class AnimatedProgressbarProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false,
  };

  static defaultProps = {
    valueStart: 0,
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart,
        })}
        update={() => ({
          value: [this.state.isAnimated ? this.props.valueEnd : this.props.valueStart],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction,
          },
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

AnimatedProgressbarProvider.propTypes = {
  repeat: PropTypes.any,
  duration: PropTypes.any,
  valueStart: PropTypes.any,
  valueEnd: PropTypes.any,
  easingFunction: PropTypes.any,
  children: PropTypes.any,
};

export default AnimatedProgressbarProvider;
