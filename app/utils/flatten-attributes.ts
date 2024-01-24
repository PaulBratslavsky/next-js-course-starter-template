export function flattenAttributes(data: any): any {
  // Check if data is a plain object or array; return as is if not
  if (typeof data !== 'object' || data === null || data instanceof Date || typeof data === 'function') {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element
  if (Array.isArray(data)) {
    return data.map(flattenAttributes);
  }

  // Initialize an object with an index signature for the flattened structure
  let flattened: { [key: string]: any } = {};

  // Iterate over each key in the object
  for (let key in data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', merge their contents
    if ((key === 'attributes' || key === 'data') && typeof data[key] === 'object') {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object or array
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}
