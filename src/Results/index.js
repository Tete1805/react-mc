import React from 'react';

export default function Results(props) {
  const { length, filter, sort, headers } = props;
  const plural = length > 1 ? 's' : '';
  return (
    <div className="MT-Results">
      {length} résultat{plural}
      {filter !== '' ? ` contenant "${filter}"` : ''}
      {sort.index !== undefined && (
        <span>
          {' '}
          trié{plural} par {headers[sort.index]}
          {` dans l'ordre ${sort.reverse ? '' : 'inverse'}`}
        </span>
      )}
    </div>
  );
}
