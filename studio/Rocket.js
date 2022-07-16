"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
console.log('hello');
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.massKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var index = 0; index < items.length; index++) {
            totalMass += items[index].massKg;
        }
        return totalMass;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
var testRocket = new Rocket('larry', 123123);
console.log(testRocket);
//  Defined in Rocket.ts.
//  Properties:
//      name should be a string.
//      totalCapacityKg should be a number.
//      cargoItems should be an array of Cargo objects.
//          Should be initialized to an empty array []
//      astronauts should be an array of Astronaut objects.
//          Should be initialized to an empty array []
//  Constructor:
//      Parameter name should be a string.
//      Parameter totalCapacityKg should be a number.
//      Sets value of this.name and this.totalCapacityKg
//  Methods:
//      sumMass( items: Payload[] ): number
//          Returns the sum of all items using each item's massKg property
//      currentMassKg(): number
//          Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
//      canAdd(item: Payload): boolean
//          Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
//      addCargo(cargo: Cargo): boolean
//          Uses this.canAdd() to see if another item can be added.
//          If true, adds cargo to this.cargoItems and returns true.
//          If false, returns false.
//      addAstronaut(astronaut: Astronaut): boolean
//          Uses this.canAdd() to see if another astronaut can be added.
//          If true, adds astronaut to this.astronauts and returns true.
//          If false, returns false.
