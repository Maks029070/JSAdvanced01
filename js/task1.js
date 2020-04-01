const users = (function() {
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
		save: function(task) {
			db.push(task);
		}
	}
})();

class Task {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const task1 = new Task('Maksym', '19');
users.save(task1);
console.log(users.getName(0));
console.log(users.getAge(0));
users.changeName(0, 'Thomas');
console.log(users.getName(0));