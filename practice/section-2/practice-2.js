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
  }
}

function count_same_elements(collection) {
  var result = {};
  var result2 = [];
  var temp = collection.map(function(val) {
    return objectify(val);
  }).forEach(function(item) {
    result[item["name"]] = (result[item["name"]] + item["summary"]) || item["summary"];
  });
  for (var i in result) {
    result2.push({
      key: i,
      count: result[i]
    });
  }
  return result2;
}
