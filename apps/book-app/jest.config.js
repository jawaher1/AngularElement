module.exports = {
  name: 'book-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/book-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
