// args: event, context, callback
exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({
    msg: 'Hello World',
  }),
});
