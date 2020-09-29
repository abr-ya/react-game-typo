const { table, getHighScores } = require('./utils/airtable');
const { getTokenFromHeaders, validateToken } = require('./utils/auth');

exports.handler = async (event) => {
  const token = getTokenFromHeaders(event.headers);
  const user = await validateToken(token);
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ err: 'Unauthorized' }),
    };
  }

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
    const records = await getHighScores(false);
    // the lowest record is at index 9
    const lowestRecord = records[9];
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
