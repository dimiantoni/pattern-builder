"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultHouse_1 = __importDefault(require("../entities/DefaultHouse"));
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
        this.start();
    }
    HouseBuilder.prototype.start = function () {
        this.house = new DefaultHouse_1.default();
    };
    HouseBuilder.prototype.buildFoundation = function () {
        this.house.parts.push('Concrete');
    };
    HouseBuilder.prototype.buildWalls = function () {
        this.house.parts.push('Bricks');
    };
    HouseBuilder.prototype.buildRoof = function () {
        this.house.parts.push('Tiles');
    };
    HouseBuilder.prototype.paint = function () {
        this.house.parts.push('Painting');
    };
    HouseBuilder.prototype.placeExpensiveDoors = function () {
        this.house.parts.push('Expensive doors');
    };
    HouseBuilder.prototype.placeExpensiveWindows = function () {
        this.house.parts.push('Expensive windows');
    };
    HouseBuilder.prototype.getHouseBuilt = function () {
        var result = this.house;
        this.start();
        return result;
    };
    return HouseBuilder;
}());
exports.default = HouseBuilder;
//# sourceMappingURL=HouseBuilder.js.map