function displayArray(data) {
	console.log(data)

	let tabledata = ''

	for (let i = 0; i < data.length; i++) {
		const row = data[i]
		
		tabledata += 
		'<tr>' + 	
			'<td>' + i + '</td>' +
			'<td>' + row['AREANAME'] + '</td>' +
			'<td>' + row['WITHDRAWALNAME'] + '</td>' +
			'<td>' + row['WITHDRAWALDATE'] + '</td>' +
			'<td>' + row['TAGNAME'] + '</td>' +
	  	'</tr>'
	}
	
	document.getElementById("output").innerHTML = tabledata
}

document.getElementById("button").onclick = () => {
	fetch('./testing.php')
	.then(res => res.json())
	.then(data => {displayArray(data)})
	.catch(err => console.log(err))
};

// Fetch, Response, Async/Await