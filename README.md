# group-by

Group an array of objects by a key or a function.

### Example
```typescript
T: {name: string, age: number, married: boolean, address: {street: string}}

groupBy(items, 'age') => Map<number, T[]>
groupBy(items, item => item.address.street) => Map<string, T[]>
groupBy(items, 'married') => Map<boolean, T[]>
groupBy(items, 'age') => Map<number, T[]>
```

### Installation
```bash
npm install @ctrl-alt-delight/group-by
```