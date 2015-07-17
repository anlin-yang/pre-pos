function collect_same_elements(collection_a, object_b) {
  var  result = collection_a
	// 获得Value值
	.map(function(item){ return item.key; })
	// 过滤相同的元素值
    .filter(function(item){ return (object_b['value'].indexOf(item) != -1 )});
	
	return result;
}