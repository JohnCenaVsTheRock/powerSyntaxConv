
function format(string, bool){  // input is for example format(string, true), this will return powerconvertet sring with floating point syntax true
	try{
		if(bool){
			return formatToGLSLfloat(PowerSyntaxConverter(string));
		}
		else{
			return PowerSyntaxConverter(string);
		}
	}
	catch(err){
		console.log(err);
		console.log("something went wrong while converting POWER syntax")
	}
}



function PowerSyntaxConverter(str){ // will convert from ** PowerSyntax to pow(...) PowerSyntax
	var lenn = JSON.parse(JSON.stringify(str)).split("**") // 3**2 -> [3,2] JUST for for loop iteration ammount
	//console.log(lenn)
	for(var i = 0; i < lenn.length - 1; i++){
		//console.log("BEFORE" + str);
		// search right with right(), wich returns index of the end of the expression on the right:
		var rightTerm = str.slice(str.indexOf("**") + 2,right(str, str.indexOf("**") + 2));
		//console.log("right " + rightTerm);
		// search left with left(), wich returns index of the end of the expression on the left:
		var leftTerm = str.slice(left(str, str.indexOf("**") - 1), str.indexOf("**"))
		//console.log("left " + leftTerm);
		// now replace [leftTerm**rightTerm] width [pow(leftTerm,rightTerm)]
		str = str.replace(leftTerm + "**" + rightTerm , "pow(" + leftTerm + "," + rightTerm + ")");
		//console.log(str);
	}
	return str
}


function formatToGLSLfloat(sstr){
	// formating to GLSL flaots here
	const regexp = /[\d|.|\+]+/g;
	var str = sstr;
	var match;
	var tempstr = str.split("");
	console.log(tempstr);
	var matcher = 0;
	while ((match = regexp.exec(str)) !== null) {
	  console.log(
		`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`,
	  );
	  if(match[0].includes(".") || match[0].includes("+")){}//do nothing
	  else{
		tempstr.splice(match.index - matcher, match[0].length, match[0].split("").concat(".0".split("")).join(""));
		matcher += match[0].length-1;
	  }
	  console.log(tempstr)
	}
	//console.log(tempstr)
	return tempstr.join("")
}