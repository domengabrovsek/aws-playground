import { Construct } from 'constructs';

import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nodeEnvVars = {
      NODE_OPTIONS: '--enable-source-maps',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: 1,
    }

    // Create an S3 bucket
    const bucket = new s3.Bucket(this, 'MyBucket', {
      bucketName: 'my-bucket-name'
    });

    // Create a DynamoDB table
    const table = new dynamodb.Table(this, 'MyTable', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      }
    });

    // Create a Lambda function for the GET endpoint
    const getLambda = new lambda.Function(this, 'GetLambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda-functions'),
      handler: 'get.handler',
      environment: {
        BUCKET_NAME: bucket.bucketName,
        TABLE_NAME: table.tableName
      }
    });

    // Create a Lambda function for the POST endpoint
    const postLambda = new lambda.Function(this, 'PostLambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda-functions'),
      handler: 'post.handler',
      environment: {
        BUCKET_NAME: bucket.bucketName,
        TABLE_NAME: table.tableName,
      }
    });


  }
}
