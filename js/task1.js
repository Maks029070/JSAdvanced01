const User = (function() {
	let name = 'Maksym';
	let age = 19;

	function getName() {
		return name;
	}
	function getAge() {
		return age;
	}
	function changeName(newName) {
		name = newName;
	}

	return {
		getName: getName,
		getAge: getAge,
		changeName, changeName
	}
})();

console.log(User.name); // impossieble to receive name
console.log(User.age); // impossieble to receive age

console.log(User.getName());
console.log(User.getAge()); // but we can get name and age thanks to our methods getName and getAge

User.changeName('Thomas');
console.log(User.getName());