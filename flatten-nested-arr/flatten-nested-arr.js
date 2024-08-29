function nearFlatten(nested) {
  // return nearFlattened;
  function flatten(arr) {
    let flattened = [];
    for (let item of arr) {
      if (Array.isArray(item[0])) {
        flattened = flattened.concat(flatten(item));
      } else {
        flattened.push(item);
      }
    }
    return flattened;
  }

  let flattenedArray = flatten(nested);
  return flattenedArray.sort((a, b) => a[0] - b[0]);
}

// 2 вариант с рекурсией

function flatten(arr) {
    let flatList = [];

    for (let item of arr) {
        if (Array.isArray(item[0])) {
            flatList = flatList.concat(flatten(item));
        } else {
            flatList.push(item);
        }
    }

    return flatList;
}

function nearFlatten(nested) {
    const flattenedArray = flatten(nested);
    return flattenedArray.sort((a, b) => a[0] - b[0]);
}
