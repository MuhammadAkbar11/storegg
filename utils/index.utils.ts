export function queriesToString<T extends Record<string, any>>(queries: T) {
  return Object.keys(queries)
    .map(key => `${key}=${queries[key]}`)
    .join("&");
}

export function uRupiah(value: number) {
  const result = value.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
  return result;
}
