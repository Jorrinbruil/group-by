/**
 * Groups items by a key or a getter function.
 * @param items
 * @param keyOrGetter
 * @example
 * T: {name: string, age: number, married: boolean, address: {street: string}}
 * groupBy(items, 'age') => Map<number, T[]>
 *     groupBy(items, item => item.address.street) => Map<string, T[]>
 *         groupBy(items, 'married') => Map<boolean, T[]>
 *             groupBy(items, 'age') => Map<number, T[]>
 */
export function groupBy<T, K extends keyof T = keyof T>(items: T[], keyOrGetter: K): Map<T[K], T[]>;
export function groupBy<T, R, K extends keyof T = keyof T>(items: T[], keyOrGetter: ((item: T) => R)): Map<R, T[]>;
export function groupBy<T, R, K extends keyof T = keyof T>(items: T[], keyOrGetter: K | ((item: T) => R)): Map<R, T[]> | Map<T[K], T[]> {
    const map = new Map();
    for (const item of items) {
        const key = typeof keyOrGetter === 'function' ? keyOrGetter(item) : item[keyOrGetter];
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(item);
    }
    return map;
}