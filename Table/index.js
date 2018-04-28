import React from 'react';

function Container(props) {
  return <table>{props.children}</table>;
}

function Headers(props) {
  const { headers, setSort, sort } = props;
  return (
    <thead>
      <tr>
        {headers.map((header, hIndex) => (
          <th key={`th${hIndex}`} onClick={() => setSort(hIndex)}>
            {header}
            {hIndex === sort.index && (
              <i
                className={`MT-sortIcon${
                  sort.reverse ? ' MT-sortIcon-reverse' : ''
                }`}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Body(props) {
  const { lines } = props;
  return (
    <tbody>
      {lines.map((line, lIndex) => (
        <tr key={`tr${lIndex}`}>
          {line.map((column, cIndex) => <td key={`td${cIndex}`}>{column}</td>)}
        </tr>
      ))}
    </tbody>
  );
}

export default { Container, Headers, Body };
