export type Not<T extends boolean> = T extends true ? false : true;
export type And<TLeft extends boolean, TRight extends boolean> = TLeft extends true
    ? TRight extends true
        ? true
        : false
    : false;
export type Nand<TLeft extends boolean, TRight extends boolean> = Not<And<TLeft, TRight>>;
export type Or<TLeft extends boolean, TRight extends boolean> = TLeft extends true
    ? true
    : TRight extends true
        ? true
        : false;
export type Nor<TLeft extends boolean, TRight extends boolean> = Not<Or<TLeft, TRight>>;
export type Xor<TLeft extends boolean, TRight extends boolean> = Not<Equals<TLeft, TRight>>;
// Taken from https://github.com/microsoft/TypeScript/issues/31581
export type Equals<TLeft, TRight> =
    (<T> () => T extends TLeft ? 1 : 2) extends
        (<T> () => T extends TRight ? 1 : 2)
            ? true
            : false;