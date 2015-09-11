// function letterCapitalize (str){
// 	str.charAt(0) = str.charAt(0).toUpperCase();
// 	var n = str.indexOf(" ");
// 	str.charAt(n+1) = str.charAt(n+1).toUpperCase();
// 	return str;
// }

// function letterCapitalize(str){
// 	return str.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); });
// }

// function wordCount (str){
// 	return str.split(" ").length;
// }

function primeTime(n){
	for(var i=2; i<n; i++){
		if(n%i===0){
			return false;
		}
	}
	return n >1
}