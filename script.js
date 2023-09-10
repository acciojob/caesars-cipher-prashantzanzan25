function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
	for(let i=0;i<decodedStr.length;i++){
		const char = encodedStr[i];
	}
	if(/[A-Z]/.test(char)){
		const charCode = char.charCodeAt(0);
		if(charCode >= 65 && charCode <= 77) {
			decodedArr.push(String.fromCharCode(charCode + 13));
		}
		else{
			decodedArr.push(String.fromCharCode(charCode - 13));
		}
	}
	else{
		decodedArr.push(char);
	}
}
return decodedArr.join(''); //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
