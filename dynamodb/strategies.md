# strategies

## modeling one to many relationships

- Denormalization by using a complex attribute
  - Do you have any access patterns based on the values in the complex attribute?
  - Is the amount of data in the complex attribute unbounded?
  - If the answer to either of the questions above is "Yes", then denormalization with a complex attribute is not a good fit to model that one-to-many relationship.
  - Good when nested objects are bounded and are not accessed directly

- Denormalization by duplicating data
  - Is the duplicated information immutable?
  - If the data does change, how often does it change and how many items
include the duplicated information?
  - Good when duplicated data is immutable or infrequently changing
- Composite primary key + the Query API action
  - Most common. Good for multiple access patterns both the parent and related entities.
- Secondary index + the Query API action
  - Similar to primary key strategy. Good when primary key is needed for something else.
- Composite sort keys with hierarchical data
  - Good for deeply nested hierarchies where you need to search through multiple levels of the hierarchy

## modeling many to many relationships
