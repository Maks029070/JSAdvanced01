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

console.log('-----------------------------------------');

// let Constructor = function(name) {
// 	this.name = name;
// 	this.isCompleted = false;

// };

// Constructor.prototype.complete = function() {
// 	console.log(`compliting task ${this.name}`);
// 	this.isCompleted = true;
// };

// Constructor.prototype.save = function() {
// 	console.log(`saving task ${this.name}`);

// };

class ObjConstructor {
	constructor(name) {
		this.name = name;
		this.isCompleted = false;
	}
	complete() {
		console.log(`compliting task ${this.name}`);
	 	this.isCompleted = true;
	}
	save() {
		console.log(`saving task ${this.name}`);
	}
}

let task1 = new ObjConstructor('create demo obj for constructors');
let task2 = new ObjConstructor('create demo obj for module');
let task3 = new ObjConstructor('create demo obj for singletons');

task1.complete();
task2.save();
task3.save();

console.log('-----------------------------------------');

class TestClass {
	constructor(text, cssClass, color) {
		this.text = text;
		this.cssClass = cssClass;
		this.color = color;
	}
	showMethod() {
		document.querySelector(`.${this.cssClass}`).innerHTML = `<p style="color: ${this.color};">${this.text}</p>`;
	}
	logMethod() {
		console.log(`Hi ${this.color}`);
	}
}

class TestClass2 extends TestClass {
	constructor(text, cssClass, color, bg) {
		super (text, cssClass, color);
		this.bg = bg;
	}
	showMethod() {
		document.querySelector(`.${this.cssClass}`).innerHTML = `<p style="color: ${this.color}; background-color: ${this.bg}">${this.text}</p>`;
	}
}

let firstClass = new TestClass('Testing class opportunities', 'testClass', 'orange');
let secondClass = new TestClass2('Testing class opportunities 2', 'testClass2', 'blue', 'black');

firstClass.showMethod();
secondClass.showMethod();
secondClass.logMethod();