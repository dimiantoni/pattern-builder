"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engineer = void 0;
var Engineer = /** @class */ (function () {
    function Engineer() {
    }
    Engineer.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Engineer.prototype.buildMinimalViableHouse = function () {
        this.builder.buildFoundation();
        this.builder.buildWalls();
        this.builder.buildRoof();
    };
    Engineer.prototype.buildFullFeaturedHouse = function () {
        this.builder.buildFoundation();
        this.builder.buildWalls();
        this.builder.buildRoof();
        this.builder.placeExpensiveDoors();
        this.builder.placeExpensiveWindows();
        this.builder.paint();
    };
    return Engineer;
}());
exports.Engineer = Engineer;
//# sourceMappingURL=Engineer.js.map