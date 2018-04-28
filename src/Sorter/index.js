import { Component } from 'react';

const getValue = element => {
  if (typeof element === 'string') return element;
  return getValue(element.props.children);
};

export default class Sorter extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: { index: undefined, reverse: true } };
    this.sortFunction = this.sortFunction.bind(this);
    this.setSort = this.setSort.bind(this);
  }
  setSort(index) {
    this.setState({
      sort: {
        index,
        reverse:
          index === this.state.sort.index
            ? !this.state.sort.reverse
            : this.state.sort.reverse
      }
    });
  }
  sortFunction(lines) {
    return Array.prototype.sort.call(lines, (line, nextLine) => {
      if (this.state.sort.index === undefined) return 0;
      const lineValue = getValue(line[this.state.sort.index]);
      const nextLineValue = getValue(nextLine[this.state.sort.index]);
      if (lineValue > nextLineValue) {
        return this.state.sort.reverse ? 1 : -1;
      } else if (lineValue < nextLineValue) {
        return this.state.sort.reverse ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

  render() {
    return this.props.children({
      setSort: this.setSort,
      sortFunction: this.sortFunction,
      sort: this.state.sort
    });
  }
}
