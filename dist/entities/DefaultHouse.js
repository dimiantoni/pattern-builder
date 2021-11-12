"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultHouse = /** @class */ (function () {
    function DefaultHouse() {
        this.parts = [];
    }
    DefaultHouse.prototype.listParts = function () {
        console.log("House parts: " + this.parts.join(', ') + "\n");
    };
    return DefaultHouse;
}());
exports.default = DefaultHouse;
//# sourceMappingURL=DefaultHouse.js.map