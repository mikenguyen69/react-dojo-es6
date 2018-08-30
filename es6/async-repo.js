require('isomorphic-fetch')

async function getRepo(username, number) {
	let response = await fetch(`https://api.github.com/users/${username}`)
	let data = await response.json()

	console.log(data)
}

getRepo('mikenguyen69', 1)
