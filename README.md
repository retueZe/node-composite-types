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