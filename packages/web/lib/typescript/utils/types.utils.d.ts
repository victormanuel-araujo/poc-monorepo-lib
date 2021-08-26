/**
 * DeepPartial is a type used to recursively set an interface or type
 * property as optional
 *
 * @example
 *
 * ```ts
 * interface A {
 *   propertyA: {
 *     prop: string
 *     prop: number
 *   }
 * }
 *
 * output:
 *
 * interface A {
 *   propertyA?: {
 *     prop?: string
 *     prop?: number
 *   }
 * }
 * ```
 */
declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
