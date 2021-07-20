**Example**

```typescript
import { Union, SymmetricDifference, Difference, Intersection } from 'composite-types';
```
```typescript
type A = {a: number, b: string};
type B = {a: boolean, c: number};

let union: Union<A, B>; // {a: boolean, b: string, c: number}
let symmetricDifference: SymmetricDifference<A, B>; // {b: string, c: number}

let difference: Difference<A, 'a' | 'c' | 123>; // {b: string}
let selection: Intersection<A, 'a' | 'c' | 123>; // {a: number}
```

**Selection types**

```typescript
type X = {
    readonly readonly_required: number;
    readonly readonly_optional?: number;
    writable_required: number;
    writable_optional?: number;
};

let readonly: ReadonlyKeys<X>; // 'readonly_required' | 'readonly_optional'
let writable: WritableKeys<X>; // 'writable_required' | 'writable_optional'
let required: RequiredKeys<X>; // 'readonly_required' | 'writable_required'
let optional: OptionalKeys<X>; // 'readonly_optional' | 'writable_optional'
```