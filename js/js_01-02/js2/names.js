var names  = [];

for (var i = 0; i < 5; i++) {
	names.push(prompt('enter your name'));
	console.log(names)
}


var userName = prompt('Enter username please');


var rightName = false;


for (var i = 0; i < names.length; i++) {

	var nameItem = names[i];

	if (nameItem == userName) {
		rightName = true;
		alert('Congratulations ' + userName + '! Login succesfull')
		break
	} 

}


if (!rightName) {
	alert('Error! No user found!')
}