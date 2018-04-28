import React, { Component } from 'react';

export default class RowCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { rowCount: this.props.rowCount || 50 };
    this.setRowCount = this.setRowCount.bind(this);
  }
  setRowCount(rowCount) {
    this.setState({ rowCount });
  }
  render() {
    return this.props.children({
      rowCount: this.state.rowCount,
      setRowCount: this.setRowCount
    });
  }
}

export function RowCounterInput(props) {
  const { setRowCount } = props;
  return (
    <div className="MT-Header-Options">
      {' '}
      Changer le nombre de résultats affichés&nbsp;:
      {[50, 100, 200].map(rowCount => (
        <span
          key={`rowCount${rowCount}`}
          className="MT-RowCount"
          onClick={e => setRowCount(rowCount)}
        >
          {rowCount}
        </span>
      ))}
    </div>
  );
}
