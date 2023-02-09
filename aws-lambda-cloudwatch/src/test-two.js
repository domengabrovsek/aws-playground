module.exports.handler = async (event, context) => {

  console.log('Called from test-two');
  console.log(context);

  return {
    body: JSON.stringify({ message: 'Called from test-two' }),
    statusCode: 200
  };
};