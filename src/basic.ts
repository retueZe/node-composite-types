/**
 * Returns an union of the `TLeft` and `TRight` generics. When both types have a property with the same key, it shall be of `TRight`'s property type.
 */
export type Union<TLeft extends {}, TRight extends {}> = {
    [K in keyof TLeft | keyof TRight]: K extends keyof TRight
        ? TRight[K]
        : K extends keyof TLeft
            ? TLeft[K]
            : never;
};
/**
 * Returns an union of the `TLeft` and `TRight` generics but without their intersection.
 */
export type SymmetricDifference<TLeft extends {}, TRight extends {}> =
    Difference<Union<TLeft, TRight>, keyof TLeft & keyof TRight>;
/**
 * Omits properties of the `T` generic that are in the `TKeys` generic.
 */
export type Difference<T extends {}, TKeys extends PropertyKey> = {
    [K in Exclude<keyof T, TKeys>]: T[K];
};
/**
 * Omits properties of the `T` generic that are not in the `TKeys` generic.
 */
export type Intersection<T extends {}, TKeys extends PropertyKey> = {
    [K in keyof T & TKeys]: T[K];
};