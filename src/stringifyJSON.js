// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//obj = {"a": 1, "b": [1,2,3], "c": function(){}, "d": undefined};
var stringifyJSON = function(obj) {
  var type = typeof obj;
  var string = "";

  //if type is object
  if (type === "object"){ 
  	if (Array.isArray(obj)){ //if object is an array
  		string += "[";
  		for (var i=0; i<obj.length; i++){
  			if (i === obj.length - 1){ //if last element, no comma
  				string += stringifyJSON(obj[i]);
  			} else { //otherwise, include comma
  				string += stringifyJSON(obj[i]) + ",";
  			}
  		}
  		return string += "]";
  	} else { //if object is not an array
  		var keys = Object.keys(obj); //keys is an array of keys in our object
  		string += "{";
  		for (var key in obj){
  			if (typeof obj[key] !== "function" && typeof obj[key] !== "undefined"){
  				//skip functions and undefined values
  				if (key === keys[keys.length-1]){ //if last key, no comma
	  				string += String(key) + ":" + stringifyJSON(obj[key]);
	  			} else { //otherwise, include comma
	  				string += String(key) + ":" + stringifyJSON(obj[key]) + ",";
	  			}
	  		}
  		}
  		return string += "}";
  	}
  }
  /* HINT: JSON does not allow you to stringify functions or undefined values, so you should skip those key/value pairs. */

  //if type is function or undefined
  if (type === "function" || type === "undefined"){
  	return "";
  }
  //if type is number or boolean
  if (type === "number" || type === "boolean"){
  	return String(obj);
  }
  //if type is string
  if (type === "string"){
  	return obj;
  }
};
