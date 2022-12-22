const moment = require('moment');

module.exports = () => {
  return moment().endOf('year').unix() - moment().unix();
};
