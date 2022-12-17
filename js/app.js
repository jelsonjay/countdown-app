'use stract';
const newYear = new Date('Jan 1, 2024 00:00:00').getTime();

function newYearEve() {
	let now = new Date().getTime();
	space = newYear - now;

	const sec = 1000;
	const min = sec * 60;
	const hour = min * 60;
	const day = hour * 24;

	let d = Math.floor(space / day);
	let h = Math.floor((space % day) / hour);
	let m = Math.floor((space % hour) / min);
	let s = Math.floor((space % min) / sec);

	document.querySelector('#day').textContent = d;
	document.querySelector('#hour').textContent = h;
	document.querySelector('#min').textContent = m;
	document.querySelector('#sec').textContent = s;
}

setInterval(() => {
	newYearEve();
}, 1000);
