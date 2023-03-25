let p1 = new Promise((resolve)=> {
	setTimeout(()=>{
		resolve(2.52)
	}, 2040)
})
let p2 = new Promise((resolve)=> {
	setTimeout(()=>{
		resolve(3)
	}, 3090)
})
let p3 = new Promise((resolve)=> {
	setTimeout(()=>{
		resolve(1.56)
	}, 1500)
})
	let p4 = Promise.all([p1 , p2 , p3]).then((value)=>{
		document.getElementById("output").innerHTML = `<tr><td> Promise 1 </td><td>${value[0]}</td></tr>
		<tr><td> Promise 2 </td><td>${value[1]}</td></tr>
		<tr><td> Promise 3 </td><td>${value[2]}</td></tr>
		<tr><td> Total </td><td>${value[0]+value[1]+value[2]}</td></tr>
		`
	})
