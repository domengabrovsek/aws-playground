module.exports.handler = async (event, context) => {

  console.log('Called from retention');

  return {
    body: JSON.stringify({ message: 'Called from retention' }),
    statusCode: 200
  };
};