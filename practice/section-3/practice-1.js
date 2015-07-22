function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(function(val) {
    if (object_b["value"].indexOf(val.key) != -1) {
      val["count"]--;
    }
  });
  return collection_a;
}
