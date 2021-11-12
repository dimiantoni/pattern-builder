"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Engineer_1 = require("./entities/Engineer");
var HouseBuilder_1 = __importDefault(require("./entities/HouseBuilder"));
function clientCode(engineer) {
    var builder = new HouseBuilder_1.default();
    engineer.setBuilder(builder);
    console.log('Standard basic house:');
    engineer.buildMinimalViableHouse();
    builder.getHouseBuilt().listParts();
    console.log('Standard full featured house:');
    engineer.buildFullFeaturedHouse();
    builder.getHouseBuilt().listParts();
    // Remember, the Builder pattern can be used without a Engineer class.
    console.log('Custom house:');
    builder.buildFoundation();
    builder.buildRoof();
    builder.getHouseBuilt().listParts();
}
var assignedEngineer = new Engineer_1.Engineer();
clientCode(assignedEngineer);
//# sourceMappingURL=house.js.map