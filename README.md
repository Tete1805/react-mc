# react-render-props-components

Components intended for React using render props  
NB : This is just a work in progress for now

## Installation

`npm install --save react-render-props-components`

## Components

* Sorter
* Filter
* DataMixer
* Pager
* Results
* RowCounter
* Table

## Usage

On top of your component file :

```js
const mc = require('react-render-props-components');
const { Filter } = mc;
```

Each component basically keeps state and exposes access to it and a modification function.

```JSX
<Filter>
  ({ setFilter, filterFunction, filter }) => (
    <div>
      <yourInput setFilter={setFilter} />
      <yourComponent filter={filter} filterFunction={filterFunction} />
    </div>
  )}
</Filter>
```

```js
  function yourInput(props) {
    const { setFilter } = props;
    return(
      <input onChange={e => setFilter(e.currentTarget.value)}>
    )
  }
```

```js
function yourComponent(props) {
  const { filter, filterFunction } = props;
  const data = ['someValue', 'otherValue', 'oneLastValue'];
  return (
    <div>
      <p>Current filter is: {filter}</p>
      <ul>{filterFunction(data).map(element => <li>{element}</li>)}</ul>
    </div>
  );
}
```

## Components details

* Sorter (TBD)
* Filter

```JSX
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
```

* DataMixer (TBD)
* Pager (TBD)
* Results (TBD)
* RowCounter (TBD)
* Table (TBD)

## Motivations

1.  Why are the functions provided the way they are?

    Functions provided by some components (like `sortFunction` and `filterFunction`) are not necessarily in the form you would expect.  
    For instance, most would have anticpated a sortFunction to be passed to an array like `myArray.sort(sortFunction)`.

    However, providing a function with the array as a parameter allows to chain (or compose) functions, like you can see in DataMixer.

    You can see in the implementation details that the component internally uses `Array.prototype[method].call`. I know I could have used Array.from but the support isn't as good.

2.  Why did you even bother?

    I wanted to play with the concept of render props and ended up creating a whole table sortable, filterable with some other goodies so I thought this might be of some interest to others.

## Contributions

Sure, just make a PR. :)  
Use Prettier and ESLint if you can.

## License

Copyright (C) 2018 Térence BARBE

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
