function count_same_elements(collection) {
  var result = [];
  var arr_count = {};
  for (var i = 0; i < collection.length; i++) {
    var tempObject = getTempObject(collection[i]);
    arr_count[tempObject.key] = (arr_count[tempObject.key] + tempObject.count) || tempObject.count;
  }
  for (var item in arr_count) {
    result.push({
      name: item,
      summary: arr_count[item]
    });
  }
  return result;
}

function getTempObject(item) {
  if (item.length == 1) {
    return {
      key: item,
      count: 1
    };
  } else if (item.charAt(item.length - 1) == ']') {
    return {
      key: item.charAt(0),
      count: (item.substring(item.indexOf('[') + 1, item.length - 1) - 0)
    };
  } else {
    return {
      key: item.charAt(0),
      count: (item.charAt(2) - 0)
    };
  }
}
