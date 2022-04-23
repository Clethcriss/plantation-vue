module.exports = {
  setupFiles: ['./test/setup.js'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html'
      }
    }
  },
  testPathIgnorePatterns: ['/node_modules/', '/test/']
};
