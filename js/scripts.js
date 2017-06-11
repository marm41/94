function drawTree(number) {
	for ( var i = 0 ; i < (number) ; i++) {
		var star = "";
		for ( var j = -1 ; j < (number) ; j++) {
			if (j < i) {
				star += '*';
			} else {
				break;
			}
		}
		console.log(star)
	}
};

drawTree(4)