function count_same_elements(collection) {
  var result = [];
  var arr_counts = {};

  collection.forEach(function(val) {
    arr_counts[val] = arr_counts[val] + 1 || 1;
  });

  for(var item in arr_counts) {
	  result.push({ key: item, count: arr_counts[item]});
  }
  return result;
}
