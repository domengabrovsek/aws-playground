module.exports.handler = async (event, context) => {

  console.log('Called from test-one');
  console.log(context);

  return {
    body: JSON.stringify({ message: 'Called from test-one' }),
    statusCode: 200
  };
};