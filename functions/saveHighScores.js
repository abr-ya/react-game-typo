const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.REACT_APP_API_KEY,
});
const base = Airtable.base(process.env.REACT_APP_AIR_BASE);
const table = base.table(process.env.REACT_APP_AIR_TABLE);

exports.handler = async (event) => {
  // console.log(event.httpMethod);
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: 'Bad method' }),
    };
  }

  const { score, name } = JSON.parse(event.body);
  if (!score || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ err: 'Bad request' }),
    };
  }
  try {
    const records = await table
      .select({
        sort: [{ field: 'score', direction: 'desc' }],
      })
      .firstPage();
    const formattedRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));
    // the lowest record is at index 9
    const lowestRecord = formattedRecords[9];
    console.log(lowestRecord);
    // update if score === ind || score more than 10th string score
    if (typeof lowestRecord.fields.score === 'undefined'
      || score > lowestRecord.fields.score) {
      // update this record
      const updatedRecord = {
        id: lowestRecord.id,
        fields: { name, score },
      };
      console.log('updatedRecord', updatedRecord);
      await table.update([updatedRecord]);
      return ({
        statusCode: 200,
        body: JSON.stringify(updatedRecord),
      });
    }
    // if not update highScores
    return ({
      statusCode: 200,
      body: JSON.stringify({}),
    });
  } catch (err) {
    return ({
      statusCode: 500,
      body: JSON.stringify({
        msg: 'Failed to save score to Airtable',
        raw: err,
      }),
    });
  }

};
