export function queriesToString<T extends Record<string, any>>(queries: T) {
  return Object.keys(queries)
    .map(key => `${key}=${queries[key]}`)
    .join("&");
}
