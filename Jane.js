
	const func = function(height,c){
		if(height % 2 === 0) {
			height = height - 1;
		}
	const firstline = function(n, c){
	if(n<=0){
		return "";
	}
	return c + firstline(n-1,c);
		};
		const helper = function(spaceN, lineN, line){
				if (line >height){
					return "";
				}
				console.log(firstline(spaceN, " " )+firstline(lineN,c));
				if(line<=height/2){
					helper(spaceN+ -1, lineN+2, line+1);
				} else {
					helper(spaceN +1, lineN-2,line+1);
				}
		};
		helper(height-1/2,1,1);
	};
	


const prDimond = function(height, ch) {
	if(height % 2 === 0) {
		height = height - 1;
	}
	const String = function(n, char) {
		let k = '';
		for(let i = 0; i < n; i++) {
			k = k + char;
		}
		return k;
	};
	let spaceN = (erk-1)/2;
	let lineN = 1;
	for(let i = 1; i <= height; i++){
		console.log(String(spaceN, ' ') + String(lineN, ch));
		if(i <= height/2) {
			spaceN = spaceN -1;
			lineN = lineN + 2;
		} else {
			spaceN = spaceN + 1;
			lineN = lineN-2;
		}
	}
};
