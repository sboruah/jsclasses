console.log('Which is the deadliest out of the two?')
//array or object and flow control

var drinks = ['peacock mantis shrimp', 'killer whale']

console.log(drinks)

function whatDrinksDoIhave () {
	if (drinks[0] === 'peacock mantis shrimp') {
		console.log('Peacock mantis shrimp : first item.  can strike a prey with 1,500 Newtons of force within three-thousandths of a second with their raptorial appendages moving at the speed of a gunshot from a twenty-two caliber rifle.')
	} 
	if (drinks[1] === 'peacock mantis shrimp') {
		console.log('Peacock mantis shrimp : first item.  can strike a prey with 1,500 Newtons of force within three-thousandths of a second with their raptorial appendages moving at the speed of a gunshot from a twenty-two caliber rifle.')
	}
	if (drinks[0] === 'killer whale') {
		console.log('Killer whales: second item.Of the very few confirmed attacks on humans by wild killer whales, none have been fatal.')
	} 
	if (drinks[1] === 'coffee') {
		console.log('Killer whales : second item. Of the very few confirmed attacks on humans by wild killer whales, none have been fatal.')
	} 

}

whatDrinksDoIhave ()