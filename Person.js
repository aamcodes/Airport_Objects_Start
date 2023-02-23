class Person {
	// Include a Constructor Method for Properties:
	// 1. Name
	// 2. Bags
	// 2a. Bags should contain/reference a data type for storing more than one bag object.
	constructor(name, bags = []) {
		this.name = name;
		this.bags = bags;
	}
	// Include an addBag method
	addBag(newBag) {
		this.bags.push(newBag);
		return this.bags;
	}
}

//Export the Module
module.exports = Person;
