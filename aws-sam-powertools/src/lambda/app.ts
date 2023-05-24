import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import middleware from '../middleware/middy';
import * as dynamodb from "../lib/dynamodb";
import * as s3 from "../lib/s3";
import { logger } from "../lib/powertools";

const lambda = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  logger.info('Invoking lambda handler');

  // fake call to dynamodb
  const dbResults = await dynamodb.get();

  // fake call to s3
  const s3Results = await s3.get();

  logger.info('Lambda handler completed');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      dbResults,
      s3Results
    })
  };
}

export const handler = middleware(lambda);
