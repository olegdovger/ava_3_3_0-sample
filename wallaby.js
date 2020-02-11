module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.mjs',
      '!app/**/*.test.mjs'
    ],
    tests: [
      'app/**/*.test.mjs'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'ava',
    debug: true
  };
};