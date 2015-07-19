function create_updated_collection(collection_a, object_b) {
  for(var i = 0; i < collection_a.length; i++){
	  if(object_b["value"].indexOf(collection_a[i].key) != -1){
		  collection_a[i]["count"]--;	
	  }
  }
  return collection_a;
}
