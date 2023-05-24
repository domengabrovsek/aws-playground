import { Handler } from 'aws-lambda';
import { logger, tracer, metrics } from '../lib/powertools';
import { captureLambdaHandler } from '@aws-lambda-powertools/tracer';
// import { logMetrics } from '@aws-lambda-powertools/metrics';
import middy, { MiddlewareObj, Request } from '@middy/core';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const loggingMiddleware = (): MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {

  const before: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (handler: Request): Promise<void> => {

    const event = {
      resource: handler.event.resource,
      path: handler.event.path,
      httpMethod: handler.event.httpMethod,
      queryStringParameters: handler.event.queryStringParameters,
      multiValueQueryStringParameters: handler.event.multiValueQueryStringParameters,
      pathParameters: handler.event.pathParameters,
      stageVariables: handler.event.stageVariables,
      body: handler.event.body,
      userAgent: handler.event.requestContext?.identity?.userAgent,
      email: handler.event.requestContext?.authorizer?.claims?.email,
      cognitoUsername: handler.event.requestContext?.authorizer?.claims?.['cognito:username']
    };

    const context = {
      handler: handler.context.functionName,
      awsRequestId: handler.context.awsRequestId,
      logGroupName: handler.context.logGroupName,
      invokedFunctionArn: handler.context.invokedFunctionArn,
    };

    logger.info('BEFORE: API Gateway request:', { ...event, ...context });
  };

  const after: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (handler: Request): Promise<void> => {
    logger.info('AFTER: API Gateway response:', { response: handler.response });
  };

  return {
    before,
    after
  };
};

export default (handler: Handler) => middy(handler)
  .use([
    captureLambdaHandler(tracer),
    // logMetrics(metrics, { captureColdStartMetric: true }),
    loggingMiddleware()
  ]);
