import { Component } from 'react';

export default class DataMixer extends Component {
  render() {
    const { lines, functions } = this.props;
    return this.props.children({
      mixedLines: functions.reduce((lines, f) => f(lines), lines)
    });
  }
}
