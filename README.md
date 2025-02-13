# group-by

Group an array of objects by a key or a function.

### Example
```typescript
type Person = {name: string, age: number, married: boolean, address: {street: string}};

const items: Person[] = [];

groupBy(items, 'age') // Returns: Map<number, Person[]>
groupBy(items, 'married') // Returns: Map<boolean, Person[]>
groupBy(items, 'age') // Returns: Map<number, Person[]>
groupBy(items, item => item.address.street) // Returns: Map<string, Person[]>
```