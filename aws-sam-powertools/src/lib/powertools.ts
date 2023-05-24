import { Logger } from "@aws-lambda-powertools/logger";
import { Metrics } from "@aws-lambda-powertools/metrics";
import { Tracer } from "@aws-lambda-powertools/tracer";

const logger = new Logger();
const metrics = new Metrics({ namespace: 'aws-sam-powertools', serviceName: 'product-service' });
const tracer = new Tracer();

export { logger, metrics, tracer };