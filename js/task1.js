const User = (function() {
	db = [];

	return {
		getName: function getName(id) {
			return db[id].name;
		},
		getAge: function (id) {
			return db[id].age;
		},
		changeName: function (id, newName) {
			db[id].name = newName;
		},
		changeAge: function (id, newAge) {
			db[id].age = newAge;
		},
		create: function(userName, userAge) {
			let user = {
				name: userName,
				age: userAge
			}
			db.push(user);
			console.log(`Creating new user ${user.name} with id ${db.length - 1}`);
		}
	}
})();

User.create('Maksym', 19);
console.log(User.getName(0));
console.log(User.getAge(0));
User.changeName(0, 'Thomas');
User.changeAge(0, 35);
console.log(User.getName(0));
console.log(User.getAge(0));