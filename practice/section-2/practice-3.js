function objectify(str) {
  var SYMBOL_START_POS = 2;
  var count = 1;
  if (str.indexOf("-") > -1 ||
    str.indexOf(":") > -1 ||
    str.indexOf("[") > -1) {
    count = parseInt(str.slice(SYMBOL_START_POS));
  }
  return {
    name: str.charAt(0),
    summary: count
  };
}

function count_same_elements(collection) {
  var result = [];
  var temp = collection.map(function(val) {
    return objectify(val);
  });

  temp.forEach(function(val) {
    var exist_items = result.filter(function(item) {
      return item.name === val.name;
    });

    if (exist_items.length === 0) {
      result.push(val);
    } else {
      exist_items[0].summary += val.summary;
    }
  });

  return result;
}
