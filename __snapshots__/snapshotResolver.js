const path = require('path')

const rootDir = path.resolve(__dirname, '..')

module.exports = {
    /** resolves from __tests__ to snapshot path */
    resolveSnapshotPath: (testPath, snapshotExtension) => {
        return testPath.replace('src/', '__snapshots__/') + snapshotExtension
    },

    /** resolves from snapshot to __tests__ path */
    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        return snapshotFilePath
            .replace('__snapshots__/', 'src/')
            .slice(0, -snapshotExtension.length)
    },
    testPathForConsistencyCheck: 'some/__tests__/example.test.js',
}
