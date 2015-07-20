function count_same_elements(collection) {
  var result = [];
  var count = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] == collection[i + 1]) {
      count++;
    } else {
      if (collection[i].length == 1) {
        count++;
        result.push({
          key: collection[i],
          count: count
        });
      } else {
        count = collection[i].substring(2, 3) - 0; // 注意，此处是将字符转换成数字
        result.push({
          key: collection[i].substring(0, 1),
          count: count
        });
      }
      count = 0;
    }
  }
  return result;
}
