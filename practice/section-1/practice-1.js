function collect_same_elements(collection_a, collection_b) {
    return collection_a.filter(function(item){        //.filter(callback);callback的返回值为boolean值
    return (collection_b.indexOf(item) != -1)           //.indexOf();返回的是下标值
  });
}
