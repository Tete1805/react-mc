import React from 'react';

export function FilterInput(props) {
  const { setFilter } = props;
  return (
    <form>
      <label htmlFor="MT-Filter">Filtre</label>
      <input
        name="MT-Filter"
        onChange={e => setFilter(e.currentTarget.value)}
      />
    </form>
  );
}

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.filterFunction = this.filterFunction.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }
  setFilter(value) {
    this.setState({ filter: value });
  }
  filterFunction(lines) {
    return Array.prototype.filter.call(
      lines,
      line =>
        this.state.filter.length === 0 ||
        JSON.stringify(line).indexOf(this.state.filter) > -1
    );
  }
  render() {
    return this.props.children({
      setFilter: this.setFilter,
      filterFunction: this.filterFunction,
      filter: this.state.filter
    });
  }
}
