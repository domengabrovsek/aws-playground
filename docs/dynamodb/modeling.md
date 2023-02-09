# modelling

## steps

- ERD
- Define access patterns
- Model primary key structure
- Additiional access patterns (secondary indexes / streams)

## define access patterns

| Entity   | Access Pattern | Index | Params | Notes |
| -------- | -------------- | ----- | ------ | ----- |
| Sessions | Create Session |       |        |       |
| Sessions | Get Session    |       |        |       |
| Sessions | Delete Session |       |        |       |

## model primary key structure

- use something available to the client
- prefixes to model different entity types
- overload secondary indexes (GSI1PK, GSI1SK)
- add Type property to all entities (easier for the future)

| Entity | PK  | SK  |
| ------ | --- | --- |
