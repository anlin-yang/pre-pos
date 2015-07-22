function create_updated_collection(collection_a, object_b) {
  var result = create_temp_collection(collection_a);
  result.forEach(function(val) {
    if (object_b["value"].indexOf(val.key) != -1) {
      val["count"] -= parseInt(val["count"] / 3);
    }
  });
  return result;
}

function create_temp_collection(collection) {
  var objResult = {};
  var result = [];
  collection.forEach(function(val) {
    var key = val.split("-")[0]; // split("-")返回的是数组。
    var count = parseInt(val.split("-")[1] || 1); // val.split("-")[1] || 1 意思是 val.split("-")[1] ？ val.split("-")[1] ： 1
    objResult[key] = (objResult[key] + count) || count; // objResult[key] || 0 意思是 objResult[key] ? objResult[key] : 0;
  });
  for (var i in objResult) {
    result.push( {key: i, count: objResult[i]} );
  }
  return result;
}
