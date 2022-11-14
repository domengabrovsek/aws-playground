import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { readFileSync } from "fs";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  const swaggerFile = {
    "openapi": "3.0.1",
    "info": {
      "title": "aws-sam-openapi-dev",
      "version": "1.0"
    },
    "servers": [
      {
        "url": "https://db407i1xkh.execute-api.eu-central-1.amazonaws.com/{basePath}",
        "variables": {
          "basePath": {
            "default": "/dev"
          }
        }
      }
    ],
    "paths": {
      "/hello": {
        "post": {
          "operationId": "hello",
          "requestBody": {
            "description": "something",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TestSchema"
                }
              }
            }
          },
          "tags": [
            "Test"
          ],
          "responses": {
            "200": {
              "description": "Ok"
            }
          }
        }
      }
    },
    "components": {
      "responses": {},
      "schemas": {
        "TestSchema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "body": {
              "type": "object"
            }
          }
        }
      }
    }
  };

  const swagger = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="SwaggerUI"
    />
    <title>SwaggerUI</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css" />
  </head>
  <body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
  <script>
    window.onload = () => {
      window.ui = SwaggerUIBundle({
        spec: ${swaggerFile},
        dom_id: '#swagger-ui',
      });
    };
  </script>
  </body>
  </html>  
  `;

  return {
    statusCode: 200,
    body: swagger,
    headers: {
      'content-type': 'text/html'
    }
  }
}