
// Javascript program to find index of closing
  // bracket for given opening bracket.
class Stack {
constructor() {
  this.items = [];
}

// add element to the stack
push(element) {
  return this.items.push(element);
}

// remove element from the stack
pop() {
  if (this.items.length > 0) {
	return this.items.pop();
  }
}

// view the last element
top() {
  return this.items[this.items.length - 1];
}

// check if the stack is empty
isEmpty() {
  return this.items.length == 0;
}

// the size of the stack
size() {
  return this.items.length;
}

// empty the stack
clear() {
  this.items = [];
}
}
let st = new Stack();

// Function to find index of closing
// bracket for given opening bracket.
function right(expression, index) {
var i;

// If index given is invalid and is
// not an opening bracket.
if (expression[index] != "(") {
  // if the character is a number just look for next blank space
  var i = index;
  while(!isNaN(parseInt(expression[i])) || expression[i] == "." || expression[i].match(/[a-z]/i)){ // floatingpoint and numbers are viewed as he same
	i++;
	//console.log("in while : " + expression[i]);
	if(expression.length <= i){ break}
  }
  //console.log(expression.slice(index, i) + " : is Number from " + index +  " till " + i + " index of " + expression);
  return i;
}

// Stack to store opening brackets.
let st = new Stack();
//stack <int> st;

// Traverse through string starting from
// given index.
for (i = index; i < expression.length; i++) {
  // If current character is an
  // opening bracket push it in stack.
  if (expression[i] == "(") st.push(expression[i]);
  // If current character is a closing
  // bracket, pop from stack. If stack
  // is empty, then this closing
  // bracket is required bracket.
  else if (expression[i] == ")") {
	st.pop();
	if (st.isEmpty()) {
	  //console.log(expression + ", " + index + ": " + i);
	  return i+1;
	}
  }
}

// If no matching closing bracket
// is found.
return 404
}

function left(expression, index) {
var i;

// If index given is invalid and is
// not an opening bracket.
if (expression[index] != ")") {
  // if the character is a number just look for next blank space
  var i = index;
  //console.log(i)
  while(!isNaN(parseInt(expression[i])) || expression[i] == "." || expression[i].match(/[a-z]/i)){ // floatingpoint and numbers are viewed as he same
	//console.log("in while : " + expression[i]);
	i--;
	if(i < 0){ break}
	//console.log("in while : " + expression[i]);
  }
  //console.log(expression.slice(index, i) + " : is Number from " + index +  " till " + i + " index of " + expression);
  return i + 1;
}

// Stack to store opening brackets.
let st = new Stack();
//stack <int> st;

// Traverse through string starting from
// given index.
//console.log("log of LEFT " + expression[index]);
for (i = 0; i < expression.length; i++) {
  // If current character is an
  // opening bracket push it in stack.
  //console.log("log of LEFT in FOR " + expression[index - i]);
  if (expression[index - i] == ")") st.push(expression[index - i]);
  // If current character is a closing
  // bracket, pop from stack. If stack
  // is empty, then this closing
  // bracket is required bracket.
  else if (expression[index - i] == "(") {
	st.pop();
	if (st.isEmpty()) {
	  //console.log(expression + ", " + index + ": " + i);
	  return index - i;
	}
  }
}

// If no matching closing bracket
// is found.
return 404
}

function PowerSyntaxConv(string, bool = false){  // input is for example format(string, true), this will return powerconvertet sring with floating point syntax true
		if(bool){
			return formatToGLSLfloat(PowerSyntaxConverter(string));
		}
		else{
			return PowerSyntaxConverter(string);
		}
		console.log(err);
		console.log("something went wrong while converting POWER syntax")
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
	//console.log(tempstr);
	var matcher = 0;
	while ((match = regexp.exec(str)) !== null) {
	  //console.log(
		//`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`,
	  //);
	  if(match[0].includes(".") || match[0].includes("+")){}//do nothing
	  else{
		tempstr.splice(match.index - matcher, match[0].length, match[0].split("").concat(".0".split("")).join(""));
		matcher += match[0].length-1;
	  }
	  //console.log(tempstr)
	}
	//console.log(tempstr)
	return tempstr.join("")
}

