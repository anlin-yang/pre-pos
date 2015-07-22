function collect_same_elements(collection_a, object_b) {
  var result = collection_a.map(function(item) {           // 获得Value值
    return item.key;
  }).filter(function(item){                                // 过滤相同的元素值
    return (object_b['value'].indexOf(item) !== -1 )
  });

	return result;
}
