# blob-to-stream [![Build Status][travis-image]][travis-url] [![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][downloads-url]

#### Convert a Blob to a [Stream](https://github.com/substack/stream-browserify).


### install

```
npm install blob-to-stream
```

### usage

```js
var toStream = require('blob-to-stream')

// Get a Blob somehow...
var blob = new Blob([ new Uint8Array([1, 2, 3]) ], { type: 'application/octet-binary' })

toStream(blob).pipe(/* ... */)
```

# License

MIT

# Attribution

Derived from [blob-to-buffer](https://github.com/feross/blob-to-buffer)

[travis-image]: https://img.shields.io/travis/retrohacker/blob-to-stream/master.svg
[travis-url]: https://travis-ci.org/retrohacker/blob-to-stream
[npm-image]: https://img.shields.io/npm/v/blob-to-stream.svg
[npm-url]: https://npmjs.org/package/blob-to-stream
[downloads-image]: https://img.shields.io/npm/dm/blob-to-stream.svg
[downloads-url]: https://npmjs.org/package/blob-to-stream
