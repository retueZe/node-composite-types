import { Intersection } from './basic';
import { Equals } from './boolean';

// Taken from https://stackoverflow.com/a/49579497
export type ReadonlyKeys<T> = {
    [K in keyof T]-?: Equals<{ [_ in K]: T[K] }, { -readonly [_ in K]: T[K] }> extends true ? never : K
}[keyof T];
export type WritableKeys<T> = {
    [K in keyof T]-?: Equals<{ [_ in K]: T[K] }, { -readonly [_ in K]: T[K] }> extends true ? K : never
}[keyof T];
export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends { [_ in K]: T[K] } ? never : K
}[keyof T];
export type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends { [_ in K]: T[K] } ? K : never
}[keyof T];
export type PublicOnly<T> = Intersection<T, keyof T>;