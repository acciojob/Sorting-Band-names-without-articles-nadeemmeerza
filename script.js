//your code here
let element = document.getElementById('bands');
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let sortedSpots = touristSpots.sort((a,b)=>{
	let a1 = ((a.replace("A ",'')).replace("An ", '')).replace("The ", '');
	let b1 = ((b.replace("A ",'')).replace("An ", '')).replace("The ", '');
	// console.log(a1,b1)
	if(b1>a1)
		return -1;
	if(a1>b1)
		return 1;
	return 0;
})
// console.log(sortedSpots);
let items = '';
sortedSpots.forEach((item)=>{
items += "<li>"+item+"</li>";
	})
element.innerHTML = items;
