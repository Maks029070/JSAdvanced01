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