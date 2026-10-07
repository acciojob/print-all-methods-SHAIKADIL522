//your JS code here. If required.
function allMethods() {
  //write your code here
	 return Object.getOwnPropertyNames(Math)
    .filter((name) => typeof Math[name] === 'function')
    .join(', ');
}

alert(allMethods());
