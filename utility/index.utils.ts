export function queriesToString<T extends Record<string, any>>(queries: T) {
  Object.keys(queries).forEach((key) => {
    if (queries[key] === null) delete queries[key];
    if (queries[key] === undefined) delete queries[key];
    if (typeof queries[key] === "string" && queries[key].trim() === "")
      delete queries[key];
  });

  return Object.keys(queries)
    .map((key) => {
      return `${key}=${queries[key]}`;
    })
    .join("&");
}

export function uRupiah(value: number) {
  const result = value.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
  return result;
}

export function uDate(_date: string) {
  const date = new Date(_date);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${weekdays[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
  return formattedDate;
}

export function uHandleDuplicates<T extends Record<string, any>>(
  arr: T[],
  compareFn: (a: T, b: T) => boolean
): T[] {
  // Create a new Map object to store the unique objects.
  const uniqueObjects = new Map();
  for (const obj of arr) {
    let isUnique = true;

    uniqueObjects.forEach((value, key) => {
      if (compareFn(obj, value)) {
        isUnique = false;
        return;
      }
    });

    if (isUnique) {
      uniqueObjects.set(obj, obj);
    }
  }

  return Array.from(uniqueObjects.values());
}

export function uNotAuthRedirect(destination: string = "/auth/sign-in") {
  return {
    redirect: {
      destination: destination,
      permanent: false,
    },
  };
}

export function uIsAuthRedirect(destination: string = "/") {
  return {
    redirect: {
      destination: destination,
      permanent: false,
    },
  };
}

export function uConvertKeysToCamelCase(obj: any) {
  let newObj: any = {};
  for (let key in obj) {
    let newKey = key.replace(/_([a-z])/g, (match) => match[1].toUpperCase());
    newObj[newKey] = obj[key];
  }
  return newObj;
}

export function uConvertNestedObjKeysToCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => {
      if (typeof v === "object") {
        return uConvertNestedObjKeysToCamelCase(v);
      } else {
        return v;
      }
    });
  } else {
    return Object.keys(obj).reduce((result, key) => {
      const value = obj[key];
      const newKey = key.replace(/_([a-z])/g, (m, p1) => p1.toUpperCase());
      let newValue;

      if (value && typeof value === "object") {
        newValue = uConvertNestedObjKeysToCamelCase(value);
      } else {
        newValue = value;
      }

      return { ...result, [newKey]: newValue };
    }, {});
  }
}
