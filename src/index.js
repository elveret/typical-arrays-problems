
exports.min = function min (array) {
  let result;
    if (array === undefined || array.length == 0) {
        result = 0;
    } else {
        result = array.reduce((res, current) => res < current ? res : current);
    }
  return result;
}

exports.max = function max (array) {
  let result;
    if (array === undefined || array.length == 0) {
        result = 0;
    } else {
        result = array.reduce((res, current) => res > current ? res : current);
    }
  return result;
}

exports.avg = function avg (array) {
  let result;
    if (array === undefined || array.length == 0) {
        result = 0;
    } else {
        result = (array.reduce((res, current) => res + current))/array.length;
    }
  return result;
}
