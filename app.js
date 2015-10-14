console.log('hello world')
//array or object and flow control

var drinks = ['greetea', 'tea']

console.log(drinks)

function whatDrinksDoIhave () {
	if (drinks[0] === 'tea') {
		console.log('I have tea & it is the first item')
	} 
	if (drinks[1] === 'tea') {
		console.log('I have tea & it is the second item')
	}
	if (drinks[0] === 'coffee') {
		console.log('I have coffee & it is the first item')
	} 
	if (drinks[1] === 'coffee') {
		console.log('I have coffee & it is the first item')
	} 

}

whatDrinksDoIhave ()