const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.REACT_APP_API_KEY,
});
const base = Airtable.base(process.env.REACT_APP_AIR_BASE);
const table = base.table(process.env.REACT_APP_AIR_TABLE);

exports.handler = async () => {
  try {
    const records = await table
      .select({
        filterByFormula: 'AND(name != "",score > 0)',
        sort: [{ field: 'score', direction: 'desc' }],
      })
      .firstPage();
    const formattedRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));

    return ({
      statusCode: 200,
      body: JSON.stringify(formattedRecords),
    });
  } catch (err) {
    return ({
      statusCode: 500,
      body: JSON.stringify({
        msg: 'Failed to get data from Airtable',
        raw: err,
      }),
    });
  }

};
