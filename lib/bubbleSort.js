function sort(array, current, next) {
  let temp = array[current];
  array[current] = array[next];
  array[next] = temp;
}

function bubbleSort(array) {
  let ordered;
  do {
    ordered = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        sort(array, i, i + 1);
        ordered = true;
      }
    }
  }
  while (ordered);
  return array;
}

module.exports = sort;
module.exports = bubbleSort;
