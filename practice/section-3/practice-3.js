function create_updated_collection(collection_a, object_b) {
  var collection_c = create_collection_c(collection_a);
  for (var i = 0; i < collection_c.length; i++) {
    if (object_b["value"].indexOf(collection_c[i].key) != -1) {
      collection_c[i]["count"] -= parseInt(collection_c[i]["count"] / 3);
    }
  }
  return collection_c;
}

function create_collection_c(collection_a) {
  var result_c = [];
  var count_num = 0;
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] == collection_a[i + 1]) {
      count_num++;
    } else {
      count_num++;
      result_c.push({
        key: collection_a[i],
        count: count_num
      });
      count_num = 0;
    }
  }
  return result_c;
}
