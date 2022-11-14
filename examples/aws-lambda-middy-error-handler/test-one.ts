export const handler = async () => {

  console.log('Called from test-one');

  return {
    body: JSON.stringify({ message: 'Called from test-one' }),
    statusCode: 200
  };
};