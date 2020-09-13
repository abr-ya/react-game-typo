const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.REACT_APP_API_KEY,
});
const base = Airtable.base(process.env.REACT_APP_AIR_BASE);
const table = base.table(process.env.REACT_APP_AIR_TABLE);

const getHighScores = async (filterEmptyRecords) => {
  const queryOptions = {
    sort: [{ field: 'score', direction: 'desc' }],
  };
  if (filterEmptyRecords) {
    queryOptions.filterByFormula = 'AND(name != "",score > 0)';
  }
  const records = await table.select(queryOptions).firstPage();
  const formattedRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
  return formattedRecords;
};

module.exports = {
  table,
  getHighScores,
};
