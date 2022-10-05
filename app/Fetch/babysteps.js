/**
 * Tutorial from Web Dev Simplified (https://www.youtube.com/watch?v=cuEtnrL9-H0) "Learn Fetch API In 6 Minutes"
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Run the html file with Live Server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
 * and open the console =)
 */


console.log(fetch('https://reqres.in/api/users')) 
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	// fetch('https://reqres.in/api/users')
	// 	.then(res => res.json())
	// 	.then(data => console.log(data)) 

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	// fetch('https://reqres.in/api/users/23')
	// 	.then(res => res.json())
	// 	.then(data => console.log(data))
	// 	.catch(err => console.log('Error!')) // No error message, fetch always succeed

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	// fetch('https://reqres.in/api/users/23')
	// 	.then(res => {
	// 		console.log(res.ok ? 'Success!' : 'Not Successful')
	// 	})
	// 	.then(data => console.log(data))
	// 	.catch(err => console.log('Error!')) // No error message, fetch always succeed

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
fetch('https://reqres.in/api/users/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},

	body: JSON.stringify({
		name: 'Freynhel',
		age: 22,
		calc: {
			add: 5+5,
			remove: 5-5
			
		},
		array: ['A', 'B', 'C']
	})
})
	.then(res => {
		return res.json()
	})
	.then(data => console.log(data))
	.catch(err => console.log('Error!'))