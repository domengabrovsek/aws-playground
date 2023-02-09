# dynamodb

## overview

- managed nosql database
- fast and scalable
- two modes
  - key-value pair
  - wide column store
- DAX (dynamodb accelerator) - inmemory dynamodb if you need super fast response times
- single digit response time regardless of table size
- http connection model
  - no persistent connections
  - "unlimited" parallel connections
- IAM authentication/authorization
  - granular permission system
  - per table permission
  - per item permission (just certain primary keys)
- manage write/read separately
  - on demand pricing
  - provisioned throughput pricing

## history

- sql optimizes for storage
- "Hard drives went from costing $200,000 per GB in 1980 to $0.03 per GB in 2014"
- why was dynamodb created?
  - Inability to use advanced relational features at scale. (less than 10% of queries needed joins)
  - Ability to relax relational constraints (no need for consistency)
- A single instance requirement limits your scalability options, as a server with 64 CPUs and 256GB of RAM is significantly more expensive than 16 servers with 4 CPUs and 16GB of RAM each.

## use cases

- hyperscale
- hyper ephemeral compute (serverless)
- most oltp applications (online transactional processing) - small bits of data at high speeds
- caching
- simple data models

## key concepts

- table
  - multiple entities in a single table (avoid joins)
  - schemaless (schema enforced in the application)
- item
  - a single record
- attributes
  - types
    - scalars
      - string, number, binary, boolean, null
    - complex
      - lists, maps
    - sets
      - string sets, number sets, binary sets
- primary key
  - drives key access patterns
  - simple
    - partition
  - composite
    - parition + sort
- secondary indexes
  - allows the use of more access patterns
  - local
  - global
- item collection
  - items with the same partition key

## dynamodb streams

- broadcast db events to microservices
- process events with lambda

## time to live (TTL)

- automatically delete items after a period of time

## consistency

- each partition has 1 primary and 2 secondary nodes
- eventual consistency
- request router -> hash function -> write item
- strong consistency
- eventual consistency

## limits

- item size limit - 400KB
- query and scan limit - 1MB (applied before filters)
- partition limits
  - 3000 reads per second
  - 1000 writes per second
- item collection size - 10GB

## API actions

- item based
  - batch, transactional
  - GetItem
  - PutItem
  - UpdateItem
  - DeleteItem
- queries
- scans

