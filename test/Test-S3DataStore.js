'use strict'
const Server = require('../lib/Server')
const S3Store = require('../lib/stores/S3Store')

const shared = require('./Test-Stores.shared')

describe('S3DataStore', function () {
  beforeEach(function() {
    this.storePath = '/test/output'
    this.server = new Server()
    this.server.datastore = new S3Store({
      path: this.storePath,
      bucket: process.env.AWS_BUCKET,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      partSize: 8 * 1024 * 1024, // each uploaded part will have ~8MB,
    })
  })

  shared.shouldHaveStoreMethods()
  shared.shouldCreateUploads()
})
