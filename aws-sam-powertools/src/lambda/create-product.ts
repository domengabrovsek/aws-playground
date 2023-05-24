import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import middleware from '../middleware/middy';
import * as dynamodb from "../lib/dynamodb";
import { logger } from "../lib/powertools";

const lambda = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  logger.info('Invoking create-product lambda handler');

  // fake call to dynamodb
  const dbResults = await dynamodb.put();

  logger.info('Lambda handler completed');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      dbResults
    })
  };
}

export const handler = middleware(lambda);
