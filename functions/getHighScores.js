const { getHighScores } = require('./utils/airtable');

exports.handler = async () => {
  try {
    const records = await getHighScores(true);
    return ({
      statusCode: 200,
      body: JSON.stringify(records),
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
