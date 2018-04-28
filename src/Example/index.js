import React, { Component } from 'react';
import './index.css';
import Table from './Table';
import Filter, { FilterInput } from './Filter';
import Sorter from './Sorter';
import RowCounter, { RowCounterInput } from './RowCounter';
import Pager, { PagerInput } from './Pager';
import DataMixer from './DataMixer';
import Results from './Results';

export default class MT extends Component {
  render() {
    const { lines, headers } = this.props;
    return (
      <div className="MT">
        <Filter>
          {({ setFilter, filterFunction, filter }) => (
            <Sorter>
              {({ setSort, sortFunction, sort }) => (
                <DataMixer
                  lines={lines}
                  functions={[filterFunction, sortFunction]}
                >
                  {({ mixedLines }) => (
                    <RowCounter>
                      {({ rowCount, setRowCount }) => (
                        <Pager length={mixedLines.length} rowCount={rowCount}>
                          {({ page, setPage }) => (
                            <React.Fragment>
                              <div className="MT-Header">
                                {this.props.filterInput || (
                                  <FilterInput setFilter={setFilter} />
                                )}
                                <Results
                                  length={mixedLines.length}
                                  filter={filter}
                                  sort={sort}
                                  headers={headers}
                                />
                                <RowCounterInput setRowCount={setRowCount} />
                              </div>
                              <Table.Container>
                                <Table.Headers
                                  headers={headers}
                                  setSort={setSort}
                                  sortFunction={sortFunction}
                                  sort={sort}
                                />
                                <Table.Body
                                  lines={mixedLines.slice(
                                    rowCount * page,
                                    rowCount * page + rowCount
                                  )}
                                />
                              </Table.Container>
                              <PagerInput
                                page={page}
                                setPage={setPage}
                                length={mixedLines.length}
                                rowCount={rowCount}
                              />
                            </React.Fragment>
                          )}
                        </Pager>
                      )}
                    </RowCounter>
                  )}
                </DataMixer>
              )}
            </Sorter>
          )}
        </Filter>
      </div>
    );
  }
}
