const { fetchMorningAdkar, fetchEveningAdkar, fetchNightAdkar } = require('./adkarService');

module.exports = {
  getMorningAdkar: fetchMorningAdkar,
  getEveningAdkar: fetchEveningAdkar,
  getNightAdkar: fetchNightAdkar
};
