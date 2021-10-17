function printDate() {
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}
let dateInterval = setInterval(printDate, 1000);
