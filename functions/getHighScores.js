const Airtable = require('airtable');

const API_KEY = process.env.REACT_APP_API_KEY;

Airtable.configure({
  apiKey: API_KEY,
});
const base = Airtable.base('app2GrBiQmriPa7UE');
const table = base.table('Table1');

exports.handler = async (event) => {
  try {
    const records = await table.select({}).firstPage();
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
