class Bag {
	// Include constructor Method with the following property:
	// 1. Weight
	//1a. Should handle an exception in case user adds no weight and throw an error.
	constructor(weight) {
		this.weight = weight;
		if (!weight) {
			throw new Error('bag needs weight');
		}
	}
}

//Export the module
module.exports = Bag;
