var blobToBuffer = require('blob-to-buffer')
var stream = require('stream')

module.exports = function blobToStream (blob) {
  var rs = new stream.Readable()
  rs._read = function () {}

  blobToBuffer(blob, function haveBuffer (e, buffer) {
    if (e) {
      rs.emit('error', e)
      rs.push(null)
    }
    rs.push(buffer)
    rs.push(null)
  })

  return rs
}
