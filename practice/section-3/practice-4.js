function create_updated_collection(collection_a, object_b) {
  var collection_c = create_collection_c(collection_a);
  for (var i = 0; i < collection_c.length; i++) {
    if (object_b["value"].indexOf(collection_c[i].key) != -1) {
      collection_c[i]["count"] -= parseInt(collection_c[i]["count"] / 3);
    }
  }
  return collection_c;
}

function create_collection_c(collection) {
  var objResult = {};
  var result = [];
  collection.forEach(function(val) {
    var key = val.split("-")[0]; // split("-")返回的是数组。
    var count = parseInt(val.split("-")[1] || 1); // val.split("-")[1] || 1 意思是 val.split("-")[1] ？ val.split("-")[1] ： 1
    objResult[key] = objResult[key] || 0; // objResult[key] || 0 意思是 objResult[key] ? objResult[key] : 0;
    objResult[key] += count;
  });

  for (var i in objResult) {
    result.push({
      key: i,
      count: objResult[i]
    });
  }

  return result;
}
