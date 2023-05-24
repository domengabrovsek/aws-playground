import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const lambda = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  const queries = JSON.stringify(event.queryStringParameters);
  return {
    statusCode: 200,
    body: `Queries: ${queries}`
  }
}

export const handler = lambda;