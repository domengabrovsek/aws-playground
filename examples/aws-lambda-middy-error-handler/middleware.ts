// standard middy middleware plugins
import middy from '@middy/core';
// import httpJsonBodyParser from '@middy/http-json-body-parser';
// import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';

// define custom middleware
const customMiddleware = () => {
  return {
    before: (handler: any) => {
      console.log('before custom middleware')
    },
    after: (handler: any) => {
      console.log('after custom middleware')
    },
    onError: (handler: any) => {
      console.log('on error custom middleware')

      return {
        body: JSON.stringify({ message: 'error was handled' }),
        statusCode: 200
      };
    }
  };
};

export default (handler: any) => middy(handler)
  .use([
    // httpEventNormalizer(),
    // httpJsonBodyParser(),
    customMiddleware(),
    httpErrorHandler({ fallbackMessage: 'Unexpected error http error handler middy' })
  ]);
