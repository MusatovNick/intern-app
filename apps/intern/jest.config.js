module.exports = {
  name: "intern",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/intern/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
