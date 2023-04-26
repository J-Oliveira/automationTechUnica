const { addMochawesome } = require('mochawesome-report-generator');

module.exports = (on, config) => {
  on('after:run', (results) => {
    return addMochawesome(results);
  });
};