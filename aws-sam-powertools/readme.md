# AWS Serverless REST API + AWS Lambda Powertools

This repository contains a working example of a serverless REST API that utilizes AWS Serverless Application Model (SAM), AWS Lambda, and TypeScript (Node.js 18). The API includes four product endpoints (GET, POST, PUT, DELETE), all returning fake data for demonstration purposes.

Key features of this project include:

1. **AWS SAM:** This project uses the AWS Serverless Application Model to define and deploy the application. AWS SAM is an open-source framework for building serverless applications that are easy to manage and deploy.

2. **AWS Lambda:** All API endpoints are served by AWS Lambda functions, providing a highly scalable and cost-effective compute solution. The Lambda functions are written in TypeScript and run in a Node.js 18 runtime.

3. **Product Endpoints:** The API includes four endpoints related to 'product' resources, supporting GET, POST, PUT, and DELETE operations. These endpoints return mock data as a demonstration.

4. **AWS Lambda Powertools:** This project uses the AWS Lambda Powertools utilities for structured logging, performance tracing, and custom metrics. These provide enhanced observability for the Lambda functions.

    - **Logger:** A utility layer that helps you follow structured logging practices. It ensures that you always include key information in your log events.

    - **Tracer:** A utility layer that automatically instruments your code to record execution times as subsegments. This helps you trace the performance and bottlenecks in your code.

    - **Metrics:** A utility layer that allows you to easily include business and operational metrics in your code. These metrics can be visualized in AWS CloudWatch.