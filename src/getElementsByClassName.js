// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	function searchNode(node, array) {
		if (node.classList && node.classList.contains(className)){
			array.push(node);
		}
		if (node.children){
			var children = node.childNodes; //array of child nodes
			for (var i=0; i<children.length; i++){
				array.concat(searchNode(children[i], array));
			}
		}
		return array;
	}
	return searchNode(document.body, []);
};
