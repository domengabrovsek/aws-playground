# strategies

## modeling one to many relationships

- Denormalization by using a complex attribute
  - Do you have any access patterns based on the values in the complex attribute?
  - Is the amount of data in the complex attribute unbounded?
  - If the answer to either of the questions above is "Yes", then denormalization with a complex attribute is not a good fit to model that one-to-many relationship.

- Denormalization by duplicating data
- Composite primary key + the Query API action
- Secondary index + the Query API action
- Composite sort keys with hierarchical data