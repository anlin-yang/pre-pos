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
  var obj = {};
  var result = [];

  var temp = collection.map(function(val) {
    return objectify(val);
  }).forEach(function(item) {
    obj[item["name"]] = (obj[item["name"]] + item["summary"]) || item["summary"];
  });

  for (var i in obj) {
    result.push({
      key: i,
      count: obj[i]
    });
  }

  return result;
}
