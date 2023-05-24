import { logger, metrics } from '../lib/powertools';
import { logMetrics, MetricUnits } from '@aws-lambda-powertools/metrics';

logger.info('Initializing DynamoDB client');

export const get = async () => {

  logger.info('Invoking dynamodb.get()');

  const results = {
    Item: {
      id: '123',
      name: 'John Doe'
    }
  }

  metrics.addMetric('productRetrieved', MetricUnits.Count, 1);
  metrics.addMetadata('productId', '123');

  logger.info('DynamoDB get() results:', { results });

  return results;
}

export const put = async () => {

  logger.info('Invoking dynamodb.put()');

  const results = {
    Item: {
      id: '123',
      name: 'John Doe'
    }
  }

  metrics.addMetric('productCreated', MetricUnits.Count, 1);
  metrics.addMetadata('productId', '123');

  logger.info('DynamoDB put() results:', { results });

  return results;
}

export const update = async () => {
  
    logger.info('Invoking dynamodb.update()');
  
    const results = {
      Item: {
        id: '123',
        name: 'John Doe'
      }
    }
  
    metrics.addMetric('productUpdated', MetricUnits.Count, 1);
    metrics.addMetadata('productId', '123');
  
    logger.info('DynamoDB update() results:', { results });
  
    return results;
  }

export const remove = async () => {
    
      logger.info('Invoking dynamodb.remove()');
    
      const results = {
        Item: {
          id: '123',
          name: 'John Doe'
        }
      }
    
      metrics.addMetric('productRemoved', MetricUnits.Count, 1);
      metrics.addMetadata('productId', '123');
    
      logger.info('DynamoDB remove() results:', { results });
    
      return results;
    }