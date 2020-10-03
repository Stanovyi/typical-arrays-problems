
exports.min = function min (array = 0) {
    if (array.length === 0 || arguments.length === 0) {
      return 0;
    }

    let minValue = array[0];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < minValue) {
          minValue = array[i];
      }
    }

    return minValue;
}

exports.max = function max (array = 0) {
    if (array.length === 0 || arguments.length === 0) {
      return 0;
    }

    let maxValue = array[0];

    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxValue) {
          maxValue = array[i];
      }
    }

    return maxValue;
}

exports.avg = function avg (array = 0) {
    if (array.length === 0 || arguments.length === 0) {
        return 0;
    }

    let sum = 0;
    let count = 0;

   for (let i = 0; i < array.length; i++) {
     sum += array[i];
     count += 1;
   }

   const result = sum / count;
   return result;
}
