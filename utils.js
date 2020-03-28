const rgbToXY = (r, g, b) => {
	let redC =  (r / 255)
	let greenC = (g / 255)
	let blueC = (b / 255)
	console.log(redC, greenC , blueC)


	let redN = (redC > 0.04045) ? Math.pow((redC + 0.055) / (1.0 + 0.055), 2.4): (redC / 12.92)
	let greenN = (greenC > 0.04045) ? Math.pow((greenC + 0.055) / (1.0 + 0.055), 2.4) : (greenC / 12.92)
	let blueN = (blueC > 0.04045) ? Math.pow((blueC + 0.055) / (1.0 + 0.055), 2.4) : (blueC / 12.92)
	console.log(redN, greenN, blueN)

	let X = redN * 0.664511 + greenN * 0.154324 + blueN * 0.162028;

	let Y = redN * 0.283881 + greenN * 0.668433 + blueN * 0.047685;

	let Z = redN * 0.000088 + greenN * 0.072310 + blueN * 0.986039;
	console.log(X, Y, Z)

	let x = X / (X + Y + Z);

	let y = Y / (X + Y + Z);

	X = x * 65536 
	Y = y * 65536

	return [X, Y]
}