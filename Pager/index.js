import React, { Component } from 'react';

export default class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.setPage = this.setPage.bind(this);
  }
  setPage(page) {
    this.setState({ page });
  }
  render() {
    const { length, rowCount } = this.props;
    const maxPage = Math.floor(length / rowCount);
    const page = this.state.page < maxPage ? this.state.page : maxPage;
    return this.props.children({
      page,
      setPage: this.setPage
    });
  }
}

export function PagerInput(props) {
  const { page, setPage, length, rowCount } = props;
  const maxPage = Math.floor(length / rowCount);
  return (
    <div className="MT-Pager">
      {page > 0 && <span onClick={e => setPage(page - 1)}>{'◄ '}</span>}
      {`Page ${page + 1} / ${maxPage + 1}`}
      {page < maxPage && <span onClick={e => setPage(page + 1)}>{' ►'}</span>}
    </div>
  );
}
