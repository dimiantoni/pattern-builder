"use strict";
/**
 * Um código simples pra fazer uma lasanha
 * que ilustra bem o conceito do pattern Builder
 */
var Lasagna = /** @class */ (function () {
    function Lasagna() {
        this.prepare = [];
    }
    return Lasagna;
}());
var LasagnaRecipe = /** @class */ (function () {
    function LasagnaRecipe() {
        this.lasagna = new Lasagna();
    }
    LasagnaRecipe.prototype.addDoughLayer = function () {
        this.lasagna.prepare.push('Adicione uma camada da massa de lasanha');
        return this;
    };
    LasagnaRecipe.prototype.addSauceLayer = function () {
        this.lasagna.prepare.push('Adicione uma camada de molho bolonhesa');
        return this;
    };
    LasagnaRecipe.prototype.addHamLayer = function () {
        this.lasagna.prepare.push('adicione uma camada generosa de presunto');
        return this;
    };
    LasagnaRecipe.prototype.addCheeseLayer = function () {
        this.lasagna.prepare.push('adicione uma camada mais generosa ainda de queijo');
        return this;
    };
    LasagnaRecipe.prototype.repeatPreviousSteps = function () {
        this.lasagna.prepare.push('Repita os passos anteriores para ficar muito bom');
        return this;
    };
    LasagnaRecipe.prototype.toBakeTheLasagna = function () {
        this.lasagna.prepare.push('Leve ao forno em 220 graus por 40 minutos');
        return this;
    };
    LasagnaRecipe.prototype.getLasagna = function () {
        return this.lasagna;
    };
    return LasagnaRecipe;
}());
var MasterChefDimi = /** @class */ (function () {
    function MasterChefDimi() {
    }
    // The MasterChef class building a complex representation of lasagna
    MasterChefDimi.construct = function () {
        console.log('Saindo uma lasanha de master chef!!');
        return new LasagnaRecipe()
            .addDoughLayer()
            .addSauceLayer()
            .addHamLayer()
            .addCheeseLayer()
            .repeatPreviousSteps()
            .toBakeTheLasagna()
            .getLasagna();
    };
    return MasterChefDimi;
}());
// Make Order Client
var lasagna = MasterChefDimi.construct();
console.log(lasagna.prepare);
console.log('40 minutos depois lasanha na mesa... Bon appétit!!');
//# sourceMappingURL=index.js.map