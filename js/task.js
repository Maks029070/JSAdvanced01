let firObj = {
	title: 'First object',
	description: 'first object on new module JavaScript Advanced!'
};

Object.defineProperty(firObj, 'toString', {
	value: function() {
		return `${this.title} ${this.description}`;
	},
	writable: false,
	enumerable: false,
	configurable: true
});

firObj.toString = 'Hi';

console.log(firObj.toString());
console.log(Object.keys(firObj));

// inheritance 

let secObj = Object.create(firObj);

Object.defineProperty(firObj, 'toString', {
	value: function() {
		return `this object inheritance ${this.title}`;
	},
	writable: false,
	enumerable: false,
	configurable: true
});

console.log(secObj.toString());

console.log('-------------------');

let Constructor = function(name) {
	this.name = name;
	this.isCompleted = false;

};

Constructor.prototype.complete = function() {
	console.log(`compliting task ${this.name}`);
	this.isCompleted = true;
};

Constructor.prototype.save = function() {
	console.log(`saving task ${this.name}`);

};

let task1 = new Constructor('create demo obj for constructors');
let task2 = new Constructor('create demo obj for module');
let task3 = new Constructor('create demo obj for singletons');

task1.complete();