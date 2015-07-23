function count_same_elements(collection) {
  var result = [];
  var temp = collection.map(function(val) {
    return objectify(val);
  }).forEach(function(val) {
    groupingItem(val, result);
  });

  return result;
}

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

function groupingItem(obj, result) {
  var exist_items = result.filter(function(item) {
    return item.name === obj.name;
  });
  if (exist_items.length === 0) {
    result.push(obj);
  } else {
    exist_items[0].summary += obj.summary;
  }
}
