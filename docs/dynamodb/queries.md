# dynamodb queries

```dynamodb

  TableName
  IndexName
  KeyConditionExpression
  ExpressionAttributeNames
  ExpressionAttributeValues

```

## optional properties on requests

- ConsistentRead
  - enables strong consistent read (default is eventually consistent)
  - consumes 2x more read units than default
  - doesnt work with global secondary indexes
  - available on
    - GetItem
    - BatchGetItem
    - Query
    - Scan
- ScanIndexForward
  - available on
    - Query
  - default order is ascending
  - flip the order from where the reading starts (20 most recent records)
- ReturnValues
  - returns additional info about the affected item
  - available on
    - PutItem
    - UpdateItem
    - DeleteItem
    - TransactWriteItem
  - options
    - NONE
    - ALL_OLD
    - UPDATED_OLD
    - UPDATED_NEW
- ReturnConsumedCapacity
  - returns info about consumed read/write capacities
  - useful to estimate pricing or test database design performance
- ReturnItemCollectionMetrics
  - returns info about collection size
  - useful to know if collection size is approaching 10GB limit
  - only applicable when secondary local index is used

## expressions

- Read
  - Key Condition Expressions
    - Used in the Query API call to describe which items you want to retrieve in your query
  - Filter Expressions
    - Used in Query and Scan operations to describe which items should be returned to the client after finding items that match your key condition expression
  - Projection Expressions
    - Used in all read operations to describe which attributes you want to return on items that were read
- Write
  - Condition Expressions
    - Used in write operations to assert the existing condition (or non-condition) of an item before writing to it
      - types
        - attribute_exists()
        - attribute_not_exists()
        - attribute_type()
        - begins_with()
        - contains()
        - size()
  - Update Expressions
    - Used in the UpdateItem call to describe the desired updates to an existing item