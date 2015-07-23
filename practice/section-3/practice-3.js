function create_updated_collection(collection_a, object_b) {
  var result = create_temp_collection(collection_a);

  result.forEach(function(val) {
    if (object_b["value"].indexOf(val.key) != -1) {
      val["count"] -= parseInt(val["count"] / 3);
    }
  });

  return result;
}

function create_temp_collection(collection_a) {
  var result = [];
  var tempObj = {};

  collection_a.forEach(function(val) {
    tempObj[val] = tempObj[val] + 1 || 1;
  });
  
  for (var item in tempObj) {
    result.push({
      key: item,
      count: tempObj[item]
    });
  }

  return result;
}
