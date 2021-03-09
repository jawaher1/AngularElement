module.exports = {
  name: 'barchart-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/barchart-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
