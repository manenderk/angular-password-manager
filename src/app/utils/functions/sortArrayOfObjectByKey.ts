export function sortArrayOfObjectByKey(array: any[], keys: string, asc: boolean ) {

  const computedKeys = keys.split(',');

  return array.sort((a, b) => {
    if (computedKeys.length > 1) {
      let x = '';
      let y = '';
      computedKeys.forEach(key => {
        x += a[key];
        y += b[key];
      });

      if (typeof x === 'string') {
        x = x ? x.toLowerCase() : '';
        y = y ? y.toLowerCase() : '';
      }

      if (asc) {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return x > y ? -1 : x < y ? 1 : 0;
      }
    } else {
      let x = a[computedKeys[0]];
      let y = b[computedKeys[0]];

      if (typeof x === 'string') {
        x = x ? x.toLowerCase() : '';
        y = y ? y.toLowerCase() : '';
      }

      if (asc) {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return x > y ? -1 : x < y ? 1 : 0;
      }
    }
  });
}
