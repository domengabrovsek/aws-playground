export const handler = async () => {

  console.log('Called from test-two');

  return {
    body: JSON.stringify({ message: 'Called from test-two' }),
    statusCode: 200
  };
};