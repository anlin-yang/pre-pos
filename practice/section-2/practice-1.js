function count_same_elements(collection) {
  var result = [];
  var arr_counts = {};
  
  for(var i = 0; i < collection.length; i++)
  {
	  arr_counts[collection[i]] = (arr_counts[collection[i]] + 1) || 1;    // 当第一次有新元素时arr_counts[collection[i]]+1 = NaN所以需要和1相或
  }
  
  for(var item in arr_counts){
	  result.push({ key: item, count: arr_counts[item]}); 
  }
  return result;
}
