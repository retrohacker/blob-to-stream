/* global Blob */

var toStream = require('../')
var test = require('tape')

var array = []
var elements = 10
for (var i = 0; i < elements; i++) array.push(i)
var blob = new Blob([ new Uint8Array(array) ], { type: 'application/octet-binary' })
var expected = Buffer.from(array)

test('Basic tests', function (t) {
  t.plan(array.length)

  var rs = toStream(blob)
  var index = 0

  rs.on('data', function (d) {
    for (var i = 0; i < d.length; i++) {
      t.equal(d[i], expected[index++], `${index} correct`)
    }
  })
})

test('Callback error on invalid arguments', function (t) {
  t.throws(function () {
    toStream({ blah: 1 }, function () {})
  })
  t.end()
})
