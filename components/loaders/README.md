# @jqcode/c-loaders

> A package to create loaders

## Install
Add `@jqcode/c-loaders` into package.json dependencies from another package.

## Components

### Circular
#### Usage
```jsx
import React from 'react'
import CircularLoader from '@jqcode/c-loaders/lib/components/Circular'

const Example = () => {
  return (
    <CircularLoader visible={ true } />
  )
}

export default Example
```
#### Props
| name    	| type 	| required 	| default 	| description 	|
|---------	|------	|----------	|---------	|-------------	|
| visible 	| bool 	| no       	| `false` 	| Show loader 	|

### Linear
#### Usage
```jsx
import React from 'react'
import LinearLoader from '@jqcode/c-loaders/lib/components/LinearLoader'

const Example = () => {
  return (
    <LinearLoader visible={ true } />
  )
}

export default Example
```
#### Props
| name    	| type 	| required 	| default 	| description 	|
|---------	|------	|----------	|---------	|-------------	|
| visible 	| bool 	| no       	| `false` 	| Show loader 	|

## License

MIT © [](https://github.com/)
