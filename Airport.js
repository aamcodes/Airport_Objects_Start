class Airport {
	constructor(name) {
		this.name = name;
		this.planes = [];
	}

	addPlane(plane) {
		//use an array method
		this.planes.push(plane);
		return this.planes;
	}
}

module.exports = Airport;
